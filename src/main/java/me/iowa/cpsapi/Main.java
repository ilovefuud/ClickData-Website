package me.iowa.cpsapi;

import io.javalin.Javalin;
import org.json.JSONObject;

import java.io.File;
import java.io.FileWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;

public class Main {
    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.enableCorsForAllOrigins();
            config.addStaticFiles("/static/");
        });

        app.get("/results/:id", ctx -> {
            String identifier = ctx.pathParam("id");
            File file = new File(System.getProperty("user.dir") + "/" + identifier + ".json");
            JSONObject jsonObject = JSONUtil.parseJSONFile(file.getPath());
            ctx.result(jsonObject.toString());
        });

        app.post("/results/:id", ctx -> {
            String identifier = ctx.pathParam("id");
            try {
                JSONObject jsonObject = new JSONObject(ctx.body());
                File file = new File(System.getProperty("user.dir") + "/" + identifier + ".json");
                Files.write(file.toPath(), jsonObject.toString().getBytes(StandardCharsets.UTF_8));
            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        app.start(80);
    }
}
