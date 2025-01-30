package seleniumWebdriver_Practice;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Handling_Alerts_Explicit_Wait {

	public static void main(String[] args) throws InterruptedException {
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		WebDriverWait mywait = new WebDriverWait(driver,Duration.ofSeconds(3));
		
		driver.get("https://testpages.herokuapp.com/styled/alerts/alert-test.html");
		
		//Getting Alert Pop-up
		driver.findElement(By.xpath("//input[@id=\"alertexamples\"]")).click();
		Thread.sleep(3000);
		Alert myAlert1 = mywait.until(ExpectedConditions.alertIsPresent());
		System.out.println("Alert Text is :" + myAlert1.getText());
		myAlert1.accept();//close Alert using Ok Button
		
		/*
		//Getting Confirmation Alert Pop-up
		driver.findElement(By.xpath("//input[@id=\"confirmexample\"]")).click();
		Thread.sleep(3000);
		Alert myAlert2 = driver.switchTo().alert();
		System.out.println("Confirmation Alert Text is :" + myAlert2.getText());
		myAlert2.dismiss(); //close Alert using cancel Button
		
		//Getting Prompting Alert Pop-up
		driver.findElement(By.xpath("//input[@id=\"promptexample\"]")).click();
		Thread.sleep(3000);
		Alert myAlert3 = driver.switchTo().alert();
		System.out.println("Prompting Alert Text is :" + myAlert3.getText());
		myAlert3.sendKeys("Success Success!!");
		Thread.sleep(3000);
		myAlert3.accept();//close Alert using Ok Button
		String promptValue = driver.findElement(By.xpath("//span[@id=\"promptretval\"]")).getText();
		//Validation against the Webpage and Sent text
		if(promptValue.equals("Success Success!!"))
		{
			System.out.println("Prompt Alert is Handled Successfully!!");
		}
*/
		}


	}

