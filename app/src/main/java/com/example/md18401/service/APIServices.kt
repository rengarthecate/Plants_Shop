package com.example.md18401.service

import com.example.md18401.model.Category
import com.example.md18401.model.Product
import com.example.md18401.model.RegisterReq
import com.example.md18401.model.RegisterRes
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Query

interface APIServices {
    @GET("list-category.php")
    suspend fun getCategory(): List<Category>

    @GET("detail-product.php")
    suspend fun getProductDetail(@Query("id") idProduct: String): Product

    @POST("register.php")
    suspend fun register(@Body registerReq: RegisterReq): RegisterRes

    @GET("list-product-by-cate.php")
    suspend fun getProductByCategory(@Query("id") idCate: String): List<Product>


}


object RetrofitInstance {
    private const val BASE_URL = "https://vieclam.shop/"

    val api: APIServices by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(APIServices::class.java)
    }
}
