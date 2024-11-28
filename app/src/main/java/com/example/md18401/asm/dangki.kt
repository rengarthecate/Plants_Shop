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
import androidx.compose.runtime.*
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
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import com.example.md18401.R
import com.example.md18401.model.RegisterReq
import com.example.md18401.viewmodel.ViewModelApp

@Composable
fun DangKiScreen(navController: NavController, viewmodel: ViewModelApp = viewModel()) {
    val message by viewmodel.message

    // State cho các trường nhập
    val nameState = remember { mutableStateOf("") }
    val emailState = remember { mutableStateOf("") }
    val passwordState = remember { mutableStateOf("") }
    val confirmpasswordState = remember { mutableStateOf("") }

    fun checkLogin(navController: NavController) {
        if (passwordState.value == confirmpasswordState.value) {
            val registerReq = RegisterReq(
                email = emailState.value,
                name = nameState.value,
                password = passwordState.value
            )
            viewmodel.register(registerReq)
            navController.navigate("login")
    }else {
            println("Passwords do not match!")
        }
    }

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
                text = "WELCOME",
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
                    // Name
                    Text("Name", fontFamily = FontFamily.Serif)
                    TextField(
                        value = nameState.value,
                        onValueChange = { nameState.value = it },
                        colors = TextFieldDefaults.colors(
                            focusedContainerColor = Color.Transparent,
                            unfocusedContainerColor = Color.Transparent,
                            disabledContainerColor = Color.Transparent,
                        ),
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(bottom = 20.dp)
                    )

                    // Email
                    Text("Email", fontFamily = FontFamily.Serif)
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

                    // Password
                    Text("Password", fontFamily = FontFamily.Serif)
                    TextField(
                        value = passwordState.value,
                        onValueChange = { passwordState.value = it },
                        colors = TextFieldDefaults
                            .colors(
                                focusedContainerColor = Color.Transparent,
                                unfocusedContainerColor = Color.Transparent,
                                disabledContainerColor = Color.Transparent,
                            ),
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(bottom = 20.dp)
                    )

                    Text("Confirm Password", fontFamily = FontFamily.Serif)
                    TextField(
                        value = confirmpasswordState.value,
                        onValueChange = { confirmpasswordState.value = it },
                        colors = TextFieldDefaults
                            .colors(
                                focusedContainerColor = Color.Transparent,
                                unfocusedContainerColor = Color.Transparent,
                                disabledContainerColor = Color.Transparent,
                            ),
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(bottom = 20.dp)
                    )

                    // Nút "Sign Up"
                    Button(
                        onClick = { checkLogin(navController) }, // Gọi hàm checkLogin khi nhấn
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
                        Text(text = "Sign Up", fontFamily = FontFamily.Serif)
                    }

                    // Kiểm tra kết quả đăng ký
                    message?.let {
                        Text(
                            text = it.message,
                            color = if (it.status) Color.Green else Color.Red,
                            modifier = Modifier.align(Alignment.CenterHorizontally)
                        )
                    }

                    Row(
                        modifier = Modifier.align(Alignment.CenterHorizontally)
                    ) {
                        Text(
                            text = "Already have account? ",
                            color = Color.Gray,
                            fontFamily = FontFamily.Serif,
                            modifier = Modifier.padding(top = 3.dp)
                        )
                        Text(
                            text = "SIGN IN",
                            fontFamily = FontFamily.Serif,
                            fontSize = 18.sp,
                            color = Color.Black,
                            modifier = Modifier
                                .padding(bottom = 6.dp)
                                .clickable { navController.popBackStack() } // Trở về màn hình đăng nhập
                        )
                    }
                }
            }
        }
    }
}
