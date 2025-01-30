package seleniumWebdriver_Practice;

import java.time.Duration;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Checkboxes_Tetsing {

	public static void main(String[] args) throws InterruptedException {
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		driver.manage().window().maximize();
		
		driver.get("https://www.qa-practice.com/elements/checkbox/mult_checkbox");
		
		//Get all the checkboxes and store it as List of WebElements
		List<WebElement> chkboxes = driver.findElements(By.xpath("//input[@class=\"form-check-input\"]"));
		
		//Selecting all the Checkboxes
		for(WebElement chkbx : chkboxes)
		{
			chkbx.click();
			System.out.println("Selected checkbox :" + chkbx);
		}

		Thread.sleep(5000);
		
		//Unselecting second checkbox
		for(int i=0; i<chkboxes.size(); i++)
		{
			if(chkboxes.get(i).isSelected())
			{
				chkboxes.get(i).click();
				System.out.println("Unselected checkbox :" + chkboxes.get(i));
			}
		}
			}
		}
