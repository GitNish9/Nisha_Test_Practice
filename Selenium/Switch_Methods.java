package seleniumWebdriver_Practice;

import java.time.Duration;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Switch_Methods {

	public static void main(String[] args) throws InterruptedException {
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

		driver.get("https://demo.nopcommerce.com/register");
		driver.manage().window().maximize();

		driver.findElement(By.linkText("nopCommerce")).click();
		driver.findElement(By.xpath("//a [@href=\"http://www.youtube.com/user/nopCommerce\"]")).click();
		driver.findElement(By.xpath("//a [@href=\"https://twitter.com/nopCommerce\"]")).click();
		
		
		System.out.println("Before Switch, Driver still Focus on Parent Window Title: " + driver.getTitle()); // Returns Parent Window Title

		// driver.close(); //Initially Closes the parent - driver focused (one)window

		// Switch to Child Window
		Set<String> WindowIds = driver.getWindowHandles();

		for (String WinId : WindowIds) {
			driver.switchTo().window(WinId);
			Thread.sleep(2000);
			String Title = driver.getTitle();
			System.out.println("Navigated to the Title: " + Title);
			
			if (Title.equals(
					"nopCommerce - YouTube")) {
				System.out.println("Closing Youtube Tab!! ");

				// After Focus Switch to child window
				Thread.sleep(5000);
				driver.close(); // Closes the Child - driver focused (one)window
				break;
			}

		}

		// driver.quit(); // Closes all the windows

	}

}
