package seleniumWebdriver_Practice;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Get_Methods {

	public static void main(String[] args) throws InterruptedException {
String browser = "Chrome";
WebDriver driver = null;

if (browser == "Chrome")
{
	driver = new ChromeDriver();
	}
else if (browser == "Microsoft Edge")
{
	driver = new EdgeDriver();
}
else if(browser == "Firefox")
	{
	driver = new FirefoxDriver();
	}

driver.get("https://www.orangehrm.com/");
Thread.sleep(5000);
driver.manage().window().maximize();
System.out.println("Title of the Page: " + driver.getTitle ());
System.out.println("Current URL: " + driver.getCurrentUrl());
//System.out.println("Page Source: " + driver.getPageSource());//Used to do source code validations against it.
String WindowId = driver.getWindowHandle();
System.out.println("Window Handle: " + WindowId); 
driver.findElement(By.partialLinkText("Privacy Policy")).click();
System.out.println("Window Handles: " + driver.getWindowHandles()); //close particular window using window Handles
;
	}

}
