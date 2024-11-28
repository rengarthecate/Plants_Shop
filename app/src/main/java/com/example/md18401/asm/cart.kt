package com.example.md18401.asm

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import coil.compose.rememberAsyncImagePainter

// Data class cho sản phẩm trong giỏ hàng
data class CartItem(
    val id: String,
    val name: String,
    val price: String,
    val imageUrl: String
)

// Tạo một danh sách sản phẩm giỏ hàng với dữ liệu cứng
val cartItems = listOf(
    CartItem("1", "Product 1", "100,000 VND", "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"),
    CartItem("2", "Product 2", "200,000 VND", "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"),
    CartItem("3", "Product 3", "300,000 VND", "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"),
    CartItem("4", "Product 4", "400,000 VND", "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"),
    CartItem("5", "Product 5", "500,000 VND", "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg")
)

@Composable
fun CartScreen(navController: NavController) {
    MaterialTheme {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            Text(
                text = "Your Cart",
                fontSize = 24.sp,
                color = Color.Black,
                modifier = Modifier
                    .padding(bottom = 16.dp)
            )

            // Hiển thị danh sách sản phẩm trong giỏ hàng
            LazyColumn(
                modifier = Modifier.weight(1f) // Đảm bảo LazyColumn chiếm không gian còn lại
            ) {
                items(cartItems.size) { index ->
                    CartItemView(cartItems[index])
                    Spacer(modifier = Modifier.height(16.dp))
                }
            }

            // Nút Check Out
            Button(
                onClick = { navController.navigate("checkout") },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 16.dp),
                shape = RoundedCornerShape(8.dp)
            ) {
                Text(text = "Check Out")
            }
        }
    }
}

@Composable
fun CartItemView(cartItem: CartItem) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp),
        shape = RoundedCornerShape(8.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Hiển thị ảnh sản phẩm
            Image(
                painter = rememberAsyncImagePainter(cartItem.imageUrl),
                contentDescription = null,
                modifier = Modifier
                    .size(100.dp)
                    .clip(RoundedCornerShape(8.dp)),
                contentScale = ContentScale.Crop
            )

            Spacer(modifier = Modifier.width(16.dp))

            // Hiển thị tên và giá sản phẩm
            Column(
                modifier = Modifier.weight(1f)
            ) {
                Text(
                    text = cartItem.name,
                    fontSize = 18.sp,
                    color = Color.Black
                )
                Text(
                    text = cartItem.price,
                    fontSize = 16.sp,
                    color = Color.Gray
                )
            }
        }
    }
}
