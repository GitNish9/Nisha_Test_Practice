package seleniumWebdriver_Practice;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Navigational_Methods {

	public static void main(String[] args) throws MalformedURLException {
		WebDriver driver = new ChromeDriver();
		@SuppressWarnings("deprecation")
		URL myurl = new URL("https://demo.nopcommerce.com/register");

		// Opening URL
		driver.navigate().to("https://www.saucedemo.com/");
		//URL is passed as object and it will be converted back to string for executing the get() internally
		driver.navigate().to(myurl); 

		//Navigate Back in Browser
		driver.navigate().back();
		System.out.println("After Back, Current URL is :" + driver.getCurrentUrl());
		
		//Navigate Forward in Browser
		driver.navigate().forward();
		System.out.println("After Forward, Current URL is :" + driver.getCurrentUrl());
		
		//Refresh/Reload the page.
		driver.navigate().refresh();
		System.out.println("Current page is refreshed");
	}

}
