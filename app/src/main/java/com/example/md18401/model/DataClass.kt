package com.example.md18401.model

data class Category(
    val idCate: String,
    val nameCate: String,
    val image: String
)

data class Product(
    val idProduct: String,
    val nameProduct: String,
    val price: Int,
    val image: String,
    val description: String,
    val idCate: String
)


data class ProductDetail(
    val idProduct: String,
    val nameProduct: String,
    val price: Int,
    val image: String,
    val description: String,
    val idCate: String
)

data class RegisterReq(
    val email: String,
    val name: String,
    val password: String
)

data class RegisterRes(
    val status: Boolean,
    val message: String
)