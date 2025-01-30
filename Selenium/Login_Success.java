package seleniumWebdriver_Practice;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.locators.RelativeLocator;

public class Login_Success {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String browser = "Chrome"; // External Configuration
		WebDriver driver = null;
		WebElement About;
		if (browser == "Chrome") {
			driver = new ChromeDriver();
		} else if (browser == "Microsoft Edge") {
			driver = new EdgeDriver();
		} else if (browser.equals("Firefox")) {
			driver = new FirefoxDriver();
		}
		driver.get("https://www.saucedemo.com/");
		driver.findElement(By.id("user-name")).sendKeys("standard_user");
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
		driver.findElement(By.name("login-button")).click();
		driver.findElement(By.id("react-burger-menu-btn")).click();
		About = driver.findElement(By.id("about_sidebar_link")); //Storing the web element in variable to use as reference in Relative Locator 
		// Referring logout link with Relative locator (below).
		driver.findElement(RelativeLocator.with(By.tagName("a")).below(About)).click();

	}

	
}
