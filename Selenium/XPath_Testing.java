package seleniumWebdriver_Practice;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class XPath_Testing {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		WebDriver driver = null;
		boolean b;
		String browser = "Firefox";
		if (browser == "Chrome") {
			driver = new ChromeDriver();
		} else if (browser == "Firefox") {
			driver = new FirefoxDriver();
		} else if (browser == "Microsoft Edge") {
			driver = new EdgeDriver();
		}
		driver.get("https://www.saucedemo.com/");
		//using xpath locator
		driver.findElement(By.xpath("//input[@name='user-name']")).sendKeys("locked_out_user");
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys("secret_sauce");
		// starts-with() function in xpath
		driver.findElement(By.xpath("//input[starts-with(@name,'login')]")).click();
		// text() function in xpath
		// b = driver.findElement(By.xpath("//h3[text()='Epic sadface: Username and
		// password do not match any user in this service')").
		b = driver.findElement(By.tagName("h3")).isDisplayed();
		if (b) {
			driver.findElement(By.id("user-name")).clear();
			driver.findElement(By.id("password")).clear();
			driver.findElement(By.xpath("//input[@name='user-name']")).sendKeys("standard_user");
			driver.findElement(By.xpath("//input[@type='password']")).sendKeys("secret_sauce");
			driver.findElement(By.name("login-button")).click();
		} else {
			driver.close();
		}
	}

}
