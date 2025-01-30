package seleniumWebdriver_Practice;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class XPath_Axes {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		WebDriver driver = null;
		String browser = "Firefox";
		if (browser == "Chrome")
			driver = new ChromeDriver();
		else if (browser == "Firefox")
			driver = new FirefoxDriver();
		else if (browser == "Microsoft Edge")
			driver = new EdgeDriver();

		driver.get("https://demo-opencart.com/");
		driver.manage().window().maximize();
		driver.findElement(By.name("first_name")).sendKeys("FirstName");
		driver.findElement(By.name("last_name")).sendKeys("LastName");
		driver.findElement(By.name("email")).sendKeys("FirstName.LastName@gmail.com");
		WebElement dpwn = driver.findElement(By.xpath("//select[@name = 'job_role']"));
		Select slt = new Select(dpwn);
		slt.deselectByValue("Architect/CTO");

	}

}
