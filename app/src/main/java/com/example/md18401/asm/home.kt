package com.example.md18401.asm

import android.util.Log
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.navigation.NavController
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material3.Card
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.text.font.FontFamily
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import com.example.md18401.viewmodel.ViewModelApp
import coil.compose.AsyncImage
import com.example.md18401.model.Product

@Composable
fun ProductList(products: List<Product>, navController: NavController) {
    LazyVerticalGrid(
        columns = GridCells.Adaptive(minSize = 150.dp),
        modifier = Modifier.padding(16.dp)
    ) {
        items(products) { product ->
            Column(
                modifier = Modifier
                    .padding(8.dp)
                    .clickable {
                        navController.navigate("productDetail/${product.idProduct}")
                    }

            ) {
                AsyncImage(
                    model = product.image,  // Nếu là URL
                    contentDescription = null,
                    modifier = Modifier
                        .size(150.dp)
                        .clip(RoundedCornerShape(8.dp)),
                    contentScale = ContentScale.Crop
                )
                Spacer(modifier = Modifier.height(8.dp))
                Text(text = product.nameProduct, fontSize = 15.sp)
                Text(text = "${product.price}VND", fontSize = 14.sp, fontWeight = FontWeight.Bold)
            }
        }
    }
}

@Composable
fun ListSanPham( navController: NavController, viewmodel: ViewModelApp = viewModel()) {
    val listCate by viewmodel.categories
    val productList by viewmodel.productList

    LaunchedEffect(Unit) {
        viewmodel.getProductByCategory("1")
    }

    MaterialTheme {
        Column {
            // Header
            Row(
                modifier = Modifier
                    .align(Alignment.CenterHorizontally)
                    .padding(bottom = 20.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    IconButton(onClick = { /* Action for search */ }) {
                        Icon(imageVector = Icons.Default.Search, contentDescription = "Search")
                    }

                    Column {
                        Text(
                            text = "Make home",
                            color = Color.Gray,
                            fontFamily = FontFamily.Serif
                        )
                        Text(
                            text = "BEAUTIFUL",
                            color = Color.Black,
                            fontFamily = FontFamily.Serif,
                            fontWeight = FontWeight.Bold
                        )
                    }

                    IconButton(onClick = { /* Action for cart */ }) {
                        Icon(imageVector = Icons.Default.ShoppingCart, contentDescription = "Cart")
                    }
                }
            }

            // Danh mục sản phẩm (Categories)
            LazyRow {
                items(listCate) { category ->
                    Card(
                        modifier = Modifier
                            .padding(start = 25.dp)
                            .clickable {
                                // Gọi API lấy sản phẩm theo danh mục
                                viewmodel.getProductByCategory(category.idCate)
                                Log.d("Category Clicked", "Category ID: ${category.idCate}, Name: ${category.nameCate}")

                                // Log sau khi lấy sản phẩm
                                if (productList.isNotEmpty()) {
                                    Log.d("ProductList", "Số sản phẩm trong danh mục ${category.nameCate}: ${productList.size}")
                                    productList.forEach { product ->
                                        Log.d("ProductList", "Tên sản phẩm: ${product.nameProduct}, Giá: ${product.price}")
                                    }
                                } else {
                                    Log.d("ProductList", "Không có sản phẩm nào trong danh mục ${category.nameCate}")
                                }
                            }
                    ) {
                        AsyncImage(
                            model = category.image,
                            contentDescription = null,
                            modifier = Modifier
                                .size(50.dp)
                                .clip(RoundedCornerShape(15.dp)),
                            contentScale = ContentScale.Crop
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Danh sách sản phẩm (ProductList)
            ProductList(products = productList, navController = navController)
        }
    }
}

