package com.example.md18401.asm

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.material3.ButtonDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import com.example.md18401.R
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview
import androidx.navigation.NavController


@Composable
fun HomeScreen(navController: NavController) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF0F0F0))
    ) {
        Image(
            painter = painterResource(id = R.drawable.wallpaper),
            contentDescription = null,
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.Crop
        )

        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.SpaceBetween,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Column(
                horizontalAlignment = Alignment.Start,
                modifier = Modifier
                    .padding(top = 120.dp)
            ) {
                Text(
                    text = "MAKE YOUR",
                    style = TextStyle(
                        fontSize = 24.sp,
                        fontWeight = FontWeight.Light,
                        fontFamily = FontFamily.Serif,
                        color = Color.White
                    )
                )
                Text(
                    text = "HOME BEAUTIFUL",
                    style = TextStyle(
                        fontSize = 30.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Serif,
                        color = Color.White
                    )
                )
                Spacer(modifier = Modifier.height(16.dp))
                Text(
                    text =  "The best simple place where you discover most wonderful furnitures and make your home beautiful",
                    style = TextStyle(
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Normal,
                        color = Color.White,
                        letterSpacing = 1.sp

                    ),
                    textAlign = androidx.compose.ui.text.style.TextAlign.Justify,
                    modifier = Modifier
                        .padding(start = 10.dp)
                        .width(250.dp)

                )
            }
            Button(
                onClick = { navController.navigate("login") },
                shape = RoundedCornerShape(50.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color.White,
                    contentColor = Color.Black
                ),
                modifier = Modifier
                    .padding(bottom = 100.dp)
                    .width(200.dp)
                    .height(50.dp)
                    .align(Alignment.CenterHorizontally)
            ) {
                Text(
                    text = "Get Started",
                    fontFamily = FontFamily.Serif,
                    fontWeight = FontWeight(800),
                    letterSpacing = 2.sp
                )
            }

        }
    }
}


