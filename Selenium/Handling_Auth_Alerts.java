package seleniumWebdriver_Practice;

import java.time.Duration;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Handling_Auth_Alerts {

	public static void main(String[] args) throws InterruptedException {
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		//driver.get("https://testpages.eviltester.com/styled/auth/basic-auth-results.html");
		//User ID : authorized, Password: password001 is injected with @ followed by actual URL 	
		driver.get("https://authorized:password001@testpages.eviltester.com/styled/auth/basic-auth-results.html");
		//Getting Authentication Alert Pop-up
		Thread.sleep(3000);
		
		
				}


	}

