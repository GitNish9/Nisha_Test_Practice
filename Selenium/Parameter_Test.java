package ng_Prac;


import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Parameter_Test {

	WebDriver driver;

/*	@BeforeClass
	public void open() {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		driver.manage().window().maximize();

	}*/

	@Test
	@Parameters ({"Browser", "URL"})
	void login(String br, String url) {
		switch(br.toLowerCase())
		{
		case "chrome" : driver = new ChromeDriver(); break;
		case "firefox": driver = new FirefoxDriver();break;
		case "edge"   : driver = new EdgeDriver();break;
		default : System.out.println("Only Designed For Chrome / Firefox / Edge Browsers");
		return;
		}

		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		driver.manage().window().maximize();
		driver.get(url);
		driver.findElement(By.id("user-name")).sendKeys("standard_user");
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
		driver.findElement(By.name("login-button")).click();
		driver.quit();
	}

}
