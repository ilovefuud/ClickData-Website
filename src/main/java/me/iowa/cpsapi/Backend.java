package me.iowa.cpsapi;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.RemovalListener;
import io.javalin.Javalin;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.concurrent.TimeUnit;
import org.json.JSONObject;

public class Backend {

	private final Cache<String, String> fileCache = CacheBuilder.newBuilder()
			.expireAfterWrite(5, TimeUnit.DAYS)
			.removalListener((RemovalListener<String, String>) removalNotification -> {
				File file = new File(removalNotification.getKey());
				file.delete();
			})
			.build();

	public Backend() {
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
				this.fileCache.put(file.getPath(), file.getPath());
			} catch (Exception e) {
				e.printStackTrace();
			}
		});

		app.start(80);
	}

}
