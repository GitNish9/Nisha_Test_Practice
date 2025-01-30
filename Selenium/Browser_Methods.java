package seleniumWebdriver_Practice;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Browser_Methods {

	public static void main(String[] args) throws InterruptedException {
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://demo.nopcommerce.com/register");
		
		driver.manage().window().maximize();
		Thread.sleep(10000);
		driver.findElement(By.linkText("nopCommerce")).click();
		
		System.out.println("Test case Pass");
		
		//driver.close(); //Closes the driver focused (one)window
		driver.quit();  //Closes all the windows
		

		

	}

}
