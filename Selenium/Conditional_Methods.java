package seleniumWebdriver_Practice;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Conditional_Methods {

	public static void main(String[] args) {
		WebDriver driver = new ChromeDriver();
		driver.get("https://demo.nopcommerce.com/register");
		driver.manage().window().maximize();

		// isDisplayed() Verifying Logo Image
		WebElement Image = driver.findElement(By.xpath("/html/body/div[6]/div[1]/div[2]/div[1]/a/img"));
		System.out.println("Status of Logo Image Display: " + Image.isDisplayed());

		System.out.println("Display Status: "
				+ driver.findElement(By.xpath("/html/body/div[6]/div[1]/div[2]/div[1]/a/img")).isDisplayed());

		// isEnabled() Verifying input box
		System.out.println("Is First Name Text Box Enabled ? : "
				+ driver.findElement(By.xpath("//*[@id=\"FirstName\"]")).isEnabled());
		// isSelected() Verifying check box,Radio button, Dropdown
		WebElement Male_RB = driver.findElement(By.xpath("//*[@id=\"gender-male\"]"));
		WebElement Female_RB = driver.findElement(By.xpath("//*[@id=\"gender-female\"]"));

		// Before Selection
		System.out.println("Is Radio Buttion Selected? :" + Male_RB.isSelected());
		System.out.println("Is Radio Buttion Selected? :" + Female_RB.isSelected());

		// Selecting Female Radio Button
		Female_RB.click();

		// After Selection
		System.out.println("After Selecting Female Radio Button");
		System.out.println("Is Radio Buttion Selected? :" + Male_RB.isSelected());
		System.out.println("Is Radio Buttion Selected? :" + Female_RB.isSelected());

		//isSelected() for Check box
		System.out.println("Status of NewsLetter CheckBox: " + driver.findElement(By.xpath("//*[@id=\"Newsletter\"]")).isSelected());
		
		driver.close();
	}

}
