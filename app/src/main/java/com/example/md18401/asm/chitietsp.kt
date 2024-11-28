package com.example.md18401.asm

import android.util.Log
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import com.example.md18401.viewmodel.ViewModelApp
import androidx.compose.ui.Alignment
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.navigation.NavController
import com.example.md18401.model.ProductDetail

@Composable
fun ProductDetailScreen(navController: NavController, idProduct: String, viewModel: ViewModelApp = viewModel()) {
    val product by viewModel.productDetail

    LaunchedEffect(idProduct) {
        if (idProduct.isNotEmpty()) {
            Log.d("ProductDetailScreen", "idProduct: $idProduct")  // Thêm dòng này để kiểm tra
            viewModel.getProductDetailViewModel(idProduct)
        }
    }

        product?.let {
            Column(
                modifier = Modifier
                    .fillMaxSize(),
                verticalArrangement = Arrangement.Top,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                AsyncImage(
                    model = it.image,
                    contentDescription = null,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(400.dp)
                        .clip(RoundedCornerShape(10.dp))
                )

                Spacer(modifier = Modifier.height(8.dp))

                // Tên sản phẩm
                Text(
                    text = it.nameProduct,
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Medium,
                    color = Color.Black,
                    fontFamily = FontFamily.Serif,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(start = 16.dp)
                )

                Spacer(modifier = Modifier.height(8.dp))

                // Giá sản phẩm
                Text(
                    text = "${it.price} VNĐ",
                    fontSize = 25.sp,
                    color = Color.Black,
                    fontWeight = FontWeight.Bold,
                    textAlign = TextAlign.Start,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(start = 16.dp)

                )

                Spacer(modifier = Modifier.height(16.dp))

                // Mô tả sản phẩm
                Text(
                    text = it.description,
                    fontSize = 16.sp,
                    color = Color.Gray,
                    fontWeight = FontWeight.SemiBold,
                    letterSpacing = 1.sp,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp)
                )

                Box(
                    Modifier
                        .padding(top = 30.dp)
                        .width(350.dp)
                        .clip(RoundedCornerShape(25.dp))  // Đặt clip trước shadow
                        .background(Color.Black)
                        .height(50.dp)
                        .clickable { navController.navigate("cart") }
                        .shadow(10.dp, RoundedCornerShape(20.dp))  // Shadow áp dụng sau clip
                        .width(350.dp),
                    contentAlignment = Alignment.Center,

                ){
                    Text(
                        text = "Add to cart",
                        color = Color.White,
                        textAlign = TextAlign.Center,
                        fontWeight = FontWeight.Bold,
                        fontSize = 16.sp
                    )
                }
            }
        }
    }

