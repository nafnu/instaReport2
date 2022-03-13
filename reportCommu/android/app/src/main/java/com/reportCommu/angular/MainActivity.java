package com.reportCommu.angular;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.hemangkumar.capacitorgooglemaps.CapacitorGoogleMaps;

public class MainActivity extends BridgeActivity {
    public void OnCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        registerPlugin(CapacitorGoogleMaps.class);
    }
}
