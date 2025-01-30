package seleniumWebdriver_Practice;


import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Explicit_Wait_Method {

	public static void main(String[] args) {
		WebDriver driver = new ChromeDriver();
		//Implicit Wait
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
		
		driver.get("https://demo.nopcommerce.com/register");
		
		driver.manage().window().maximize();
		
		driver.findElement(By.linkText("nopCommerce")).click();

	}

}
