package com.svalero.myapplication;

import static com.svalero.myapplication.R.*;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private EditText taskName;
    private List<String> taskList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        taskList = new ArrayList<>();

    }




    protected void OnResume () {
        super.onResume();
    }

    public void addTask (View view){
        Toast.makeText(this, "Tarea", Toast.LENGTH_SHORT).show();
        EditText taskName = findViewById(R.id.taskName);
        String name = taskName.getText().toString();
        if (name.isEmpty()){
            Toast.makeText(this, "Define", Toast.LENGTH_SHORT).show();
            return;
        }

        taskList.add(name);
        
    }

}