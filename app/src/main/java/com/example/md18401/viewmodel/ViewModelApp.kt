package com.example.md18401.viewmodel

import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.State
import com.example.md18401.model.Category
import com.example.md18401.model.Product
import com.example.md18401.model.RegisterReq
import com.example.md18401.model.RegisterRes
import com.example.md18401.service.RetrofitInstance

class ViewModelApp : ViewModel() {
    // danh mục sản phẩm
    private val _categories = mutableStateOf<List<Category>>(emptyList())
    val categories: State<List<Category>> = _categories

    // chi tiết sản phẩm
    private val _productDetail = mutableStateOf<Product?>(null) // Sửa thành Product? thay vì List<Product?>
    val productDetail: State<Product?> = _productDetail

    //đăng ký
    private val _messsage = mutableStateOf<RegisterRes?>(null) // Sửa thành Product? thay vì List<Product?>
    val message: State<RegisterRes?> = _messsage

    private val _productList = mutableStateOf<List<Product>>(emptyList())
    val productList: State<List<Product>> = _productList


    init {
        getCategoryViewModel()
    }

    // Hàm lấy danh mục sản phẩm
    private fun getCategoryViewModel() {
        viewModelScope.launch {
            try {
                val response = RetrofitInstance.api.getCategory()
                _categories.value = response
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    // Hàm lấy chi tiết sản phẩm theo ID
    fun getProductDetailViewModel(idProduct: String) {
        viewModelScope.launch {
            try {
                val response = RetrofitInstance.api.getProductDetail(idProduct)
                _productDetail.value = response
            } catch (e: Exception) {
                Log.e("ViewModelApp", "Error fetching product detail: ${e.message}")
            }
        }
    }

    fun register(register: RegisterReq) {
        viewModelScope.launch {
            try {
                _messsage.value = RetrofitInstance.api.register(register)
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    fun getProductByCategory(idCate: String) {
        viewModelScope.launch {
            try {
                val response = RetrofitInstance.api.getProductByCategory(idCate)
                _productList.value = response
                Log.d("ViewModelApp", "Products fetched for category $idCate: ${response.size}")
                response.forEach { product ->
                    Log.d("ViewModelApp", "Product: ${product.nameProduct}, Price: ${product.price}")
                }
            } catch (e: Exception) {
                Log.e("ViewModelApp", "Error fetching products for category $idCate", e)
            }
        }
    }
}
