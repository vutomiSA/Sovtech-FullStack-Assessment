/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sovtech.vutomi.assessment.demo.service;

import com.sovtech.vutomi.assessment.demo.entity.Category;
import com.sovtech.vutomi.assessment.demo.entity.CategoryDetails;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Vee
 */
@Service
@Transactional
public class ApiService {
    
    @Autowired
    private RestTemplateBuilder restTemplateBuilder;

    public List<Category> allCategories(){
        List<Category> categories = new ArrayList<>();
        
        String url = "https://api.chucknorris.io/jokes/categories";

        ResponseEntity<List<Category>> result = restTemplateBuilder.build()
                .exchange(url,
                        HttpMethod.GET,
                        null, 
                        new ParameterizedTypeReference<List<Category>>() {});

        
        categories.addAll(result.getBody());

        return categories;
    }
    
    public CategoryDetails getCategoryDetails(String name){
        CategoryDetails categoryDetails = null;
        
        String url = "https://api.chucknorris.io/jokes/random?category="+name;
        ResponseEntity<CategoryDetails> result = restTemplateBuilder.build()
                .exchange(url, HttpMethod.GET, null,
                        new ParameterizedTypeReference<CategoryDetails>() {});
        
        categoryDetails = result.getBody();
        
        return categoryDetails;
    }
}
