package com.example.md18401.asm

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.md18401.R

class DangNhap : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApp()
        }
    }
}

@Composable
fun MyApp() {
    val navController = rememberNavController()

    NavHost(
        navController = navController,
        startDestination = "welcome"
    ) {
        // Màn hình Đăng nhập
        composable("login") {
            DangNhapScreen(navController)
        }

        // Màn hình Đăng ký
        composable("sign_in") {
            DangKiScreen(navController)
        }

        // Màn hình danh sách sản phẩm (Trang chủ)
        composable("home") {
            ListSanPham(navController)
        }

        // Màn hình Welcome
        composable("welcome") {
            HomeScreen(navController)
        }

        // Màn hình thông báo
        composable("notification") {
            thongBao(navController)
        }

        composable("cart"){
            CartScreen(navController)
        }

        composable("checkout"){
            CheckoutScreen(navController)
        }

        // Màn hình chi tiết sản phẩm với tham số productId
        composable(
            "productDetail/{idProduct}",
            arguments = listOf(navArgument("idProduct") { type = NavType.StringType })
        ) { backStackEntry ->
            val idProduct = backStackEntry.arguments?.getString("idProduct") ?: ""
            ProductDetailScreen(idProduct = idProduct, navController = navController)
        }
    }
}


@Composable
fun DangNhapScreen(navController: NavController) {
    Box(modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(20.dp),
        ) {
            Row(
                modifier = Modifier
                    .align(Alignment.CenterHorizontally)
                    .padding(bottom = 30.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Box(
                    modifier = Modifier
                        .width(130.dp)
                        .height(1.dp)
                        .background(Color.Gray)
                )
                Spacer(modifier = Modifier.width(20.dp))
                Image(
                    painter = painterResource(id = R.drawable.satan),
                    contentDescription = null,
                    Modifier
                        .width(60.dp)
                        .height(60.dp)
                )
                Spacer(modifier = Modifier.width(20.dp))
                Box(
                    modifier = Modifier
                        .width(130.dp)
                        .height(1.dp)
                        .background(Color.Gray)
                )
            }
            Text(
                text = "Hello !",
                color = Color.Gray,
                fontSize = 30.sp,
                fontWeight = FontWeight.W500,
                fontFamily = FontFamily.Serif,
                modifier = Modifier.padding(bottom = 20.dp)
            )
            Text(
                text = "WELCOME BACK",
                color = Color.Black,
                fontSize = 30.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Serif,
                modifier = Modifier.padding(bottom = 60.dp)
            )
            Box(
                modifier = Modifier
                    .shadow(10.dp, RoundedCornerShape(16.dp))
                    .clip(RoundedCornerShape(16.dp))
                    .background(Color.White)
                    .padding(16.dp)
            ) {
                Column(modifier = Modifier.fillMaxWidth()) {
                    val emailState = remember { mutableStateOf("") }
                    val passwordState = remember { mutableStateOf("") }

                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(bottom = 10.dp)
                    ) {
                        Text(text = "Email", fontFamily = FontFamily.Serif)
                        TextField(
                            value = emailState.value,
                            onValueChange = { emailState.value = it },
                            colors = TextFieldDefaults.colors(
                                focusedContainerColor = Color.Transparent,
                                unfocusedContainerColor = Color.Transparent,
                                disabledContainerColor = Color.Transparent,
                            ),
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(bottom = 20.dp)
                        )
                    }

                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(bottom = 10.dp)
                    ) {
                        Text(text = "Password", fontFamily = FontFamily.Serif)
                        TextField(
                            value = passwordState.value,
                            onValueChange = { passwordState.value = it },
                            colors = TextFieldDefaults.colors(
                                focusedContainerColor = Color.Transparent,
                                unfocusedContainerColor = Color.Transparent,
                                disabledContainerColor = Color.Transparent,
                            ),
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(bottom = 20.dp)
                        )
                    }

                    Text(
                        text = "Forgot Password",
                        fontFamily = FontFamily.SansSerif,
                        fontSize = 20.sp,
                        fontWeight = FontWeight.Medium,
                        modifier = Modifier
                            .align(Alignment.CenterHorizontally)
                            .padding(bottom = 20.dp)
                    )

                    Button(
                        onClick = { navController.navigate("home") },
                        modifier = Modifier
                            .padding(top = 20.dp, bottom = 20.dp)
                            .align(Alignment.CenterHorizontally)
                            .width(280.dp)
                            .height(50.dp),
                        colors = ButtonDefaults.buttonColors(
                            containerColor = Color(0xFFA000000),
                            contentColor = Color.White
                        ),
                        shape = RoundedCornerShape(5.dp)
                    ) {
                        Text(text = "Log in", fontFamily = FontFamily.Serif)
                    }

                    Text(
                        text = "SIGN UP",
                        fontFamily = FontFamily.Serif,
                        modifier = Modifier
                            .align(Alignment.CenterHorizontally)
                            .clickable { navController.navigate("sign in") }

                    )
                }
            }
        }
    }
}
