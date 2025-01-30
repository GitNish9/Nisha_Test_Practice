package ng_Prac;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DataProvider_Prac {

	WebDriver driver = new ChromeDriver();

	@BeforeClass
	public void open() {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		driver.manage().window().maximize();

	}

	@Test(dataProvider = "TestData")
	void login(String UName, String Pwd) {
		driver.get("https://www.saucedemo.com/");
		driver.findElement(By.id("user-name")).sendKeys(UName);
		driver.findElement(By.id("password")).sendKeys(Pwd);
		driver.findElement(By.name("login-button")).click();
	}

	@DataProvider(name = "TestData")
	String[][] LoginData() {
		String data[][] = { { "locked_out_user", "DummyPassword" }, { "problem_user", "DummyPassword1" },
				{ "performance_glitch_user", "DummyPassword2" }, { "standard_user", "secret_sauce" } };
		return data;
	}
}
