/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sovtech.vutomi.assessment.demo.entity;

import java.io.Serializable;
import java.util.List;
import lombok.Data;

/**
 *
 * @author Vee
 */
public class CategoryDetails implements Serializable{
    
    private String id;
    private String created_at;
    private String icon_url;
    private String updated_at;
    private String url;
    private String value;
    private List<Category> categories;
    
    public CategoryDetails(){}

    public CategoryDetails(String id) {
        this.id = id;
    }

    public CategoryDetails(List<Category> categories) {
        this.categories = categories;
    }

    public CategoryDetails(String id, String created_at, String icon_url, String updated_at, String url, String value, List<Category> categories) {
        this.id = id;
        this.created_at = created_at;
        this.icon_url = icon_url;
        this.updated_at = updated_at;
        this.url = url;
        this.value = value;
        this.categories = categories;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public String getIcon_url() {
        return icon_url;
    }

    public void setIcon_url(String icon_url) {
        this.icon_url = icon_url;
    }

    public String getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(String updated_at) {
        this.updated_at = updated_at;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }
}
