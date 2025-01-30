package ng_Prac;

import org.testng.annotations.Test;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Annot_Practice {

	WebDriver driver = new ChromeDriver();

	@Test(priority = 0)
	public void open() {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		driver.get("https://www.saucedemo.com/");
		driver.manage().window().maximize();

	}

	@Test(priority = 2)
	void logout() throws InterruptedException {
		
		driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']")).click();
		Thread.sleep(5000);
		driver.findElement(By.id("logout_sidebar_link")).click();

	}

	@Test(priority = 1)
	void login() {
		driver.findElement(By.id("user-name")).sendKeys("standard_user");
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
		driver.findElement(By.name("login-button")).click();
	}
}
