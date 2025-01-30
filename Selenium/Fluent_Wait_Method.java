package seleniumWebdriver_Practice;



import java.time.Duration;
import java.util.NoSuchElementException;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;

public class Fluent_Wait_Method {

	public static void main(String[] args) {
		WebDriver driver = new ChromeDriver();
		
		// Fluent Wait Declaration
		Wait<WebDriver> mywait = new FluentWait<WebDriver>(driver)
				.withTimeout(Duration.ofSeconds(10))
				.pollingEvery(Duration.ofSeconds(2))
				.ignoring(NoSuchElementException.class);
		driver.get("https://demo.nopcommerce.com/register");
		driver.manage().window().maximize();
		
		//Storing the identified element in WebElement variable on conditional basis
		WebElement lnktxt = mywait.until(new Function<WebDriver, WebElement> ()
				{
			public WebElement apply(WebDriver driver)
			{
				return driver.findElement(By.linkText("nopCommerce"));
			}
				});
		// driver.findElement(By.linkText("nopCommerce")).click();
		lnktxt.click();

	}

}
