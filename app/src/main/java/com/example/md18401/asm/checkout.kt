package com.example.md18401.asm

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.SmallTopAppBar
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.example.md18401.R

@Composable
fun ShippingAddressSection() {
    Column(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
        Text(text = "Shipping Address")
        Card(
            modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp),
            shape = RoundedCornerShape(8.dp),
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text(text = "Bruno Fernandes", fontWeight = FontWeight.Bold)
                Text(
                    text = "25 rue Robert Latouche, Nice, 06200, Côte D'azur, France",
                    color = Color.Gray
                )
            }
        }
    }
}

@Composable
fun PaymentSection() {
    Column(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
        Text(text = "Payment", )
        Card(
            modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp),
            shape = RoundedCornerShape(8.dp),
        ) {
            Row(
                modifier = Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Image(
                    painter = painterResource(id = R.drawable.wallpaper), // Thay thế bằng icon thẻ của bạn
                    contentDescription = "Mastercard",
                    modifier = Modifier.size(32.dp)
                )
                Spacer(modifier = Modifier.width(16.dp))
                Text(text = "**** **** **** 3947")
            }
        }
    }
}

@Composable
fun DeliveryMethodSection() {
    Column(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
        Text(text = "Delivery method")
        Card(
            modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp),
            shape = RoundedCornerShape(8.dp),
        ) {
            Row(
                modifier = Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Image(
                    painter = painterResource(id = R.drawable.wallpaper), // Thay thế bằng icon DHL của bạn
                    contentDescription = "DHL",
                    modifier = Modifier.size(32.dp)
                )
                Spacer(modifier = Modifier.width(16.dp))
                Text(text = "Fast (2-3 days)")
            }
        }
    }
}

@Composable
fun OrderSummarySection() {
    Column(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            Text(text = "Order:")
            Text(text = "$95.00")
        }
        Row(modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp), horizontalArrangement = Arrangement.SpaceBetween) {
            Text(text = "Delivery:")
            Text(text = "$5.00")
        }
        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            Text(text = "Total:", fontWeight = FontWeight.Bold)
            Text(text = "$100.00", fontWeight = FontWeight.Bold)
        }
    }
}

@Composable
fun SubmitOrderButton(navController: NavController) {
    Button(
        onClick = { navController.navigate("notification") },
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        colors = ButtonDefaults.buttonColors(Color.Black)
    ) {
        Text(text = "SUBMIT ORDER", color = Color.White)
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CheckoutScreen(navController: NavController) {
    Column(modifier = Modifier.fillMaxSize()) {
        SmallTopAppBar(
            title = { Text(text = "Check out") },
            navigationIcon = {
                IconButton(onClick = {  }) {
                    Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                }
            },
            actions = {
                IconButton(onClick = {  }) {
                    Icon(Icons.Default.Edit, contentDescription = "Edit")
                }
            }
        )
        ShippingAddressSection()
        PaymentSection()
        DeliveryMethodSection()
        OrderSummarySection()
        Spacer(modifier = Modifier.weight(1f))
        SubmitOrderButton(navController)
    }
}
