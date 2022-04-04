/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sovtech.vutomi.assessment.demo.controller;

import com.sovtech.vutomi.assessment.demo.entity.Category;
import com.sovtech.vutomi.assessment.demo.entity.CategoryDetails;
import com.sovtech.vutomi.assessment.demo.service.ApiService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Vee
 */
@RestController
@RequestMapping("/category/v1/api/")
@CrossOrigin(origins = "*")
public class ApiController {
    
    @Autowired
    private ApiService apiService;

    @GetMapping("/allCategories")
    public List<Category> allCategories(){
        return apiService.allCategories();
    }
    
    @GetMapping("/getCategoryDetails/{name}")
    public CategoryDetails getCategoryDetails(@PathVariable String name){
        return apiService.getCategoryDetails(name);
    }
}
