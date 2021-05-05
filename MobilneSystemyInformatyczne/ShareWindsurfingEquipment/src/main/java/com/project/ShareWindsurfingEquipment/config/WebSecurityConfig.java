package com.project.ShareWindsurfingEquipment.config;

import com.project.ShareWindsurfingEquipment.jwt.AuthenticationFilter;
import com.project.ShareWindsurfingEquipment.jwt.JwtAuthenticationEntryPoint;
import com.project.ShareWindsurfingEquipment.jwt.TokenProvider;
import com.project.ShareWindsurfingEquipment.service.UserPrincipalService;
import io.jsonwebtoken.lang.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserPrincipalService userPrincipalService;
    private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint authenticationEntryPoint;


    public WebSecurityConfig(UserPrincipalService userPrincipalService, TokenProvider tokenProvider, JwtAuthenticationEntryPoint authenticationEntryPoint) {

        Assert.notNull(userPrincipalService, "userPrincipalService must not be null");
        Assert.notNull(tokenProvider, "userPrincipalService must not be null");
        Assert.notNull(authenticationEntryPoint, "userPrincipalService must not be null");

        this.userPrincipalService = userPrincipalService;
        this.tokenProvider = tokenProvider;
        this.authenticationEntryPoint = authenticationEntryPoint;
    }


    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationFilter getAuthenticationFilter() {

        return new AuthenticationFilter(tokenProvider,userPrincipalService);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {

        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userPrincipalService).passwordEncoder(getPasswordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .csrf().disable()
                .cors()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(getAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers("/userLogin/logIn")
                .permitAll()
                .antMatchers("/user")
                .permitAll()
                .antMatchers("/role")
                .permitAll()
                .antMatchers("/shops/add")
                .permitAll();
                /*.anyRequest()
                .authenticated();*/
    }
}
