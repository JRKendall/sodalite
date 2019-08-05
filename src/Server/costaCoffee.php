<?
class SQLHandler
{
	protected static $dbAdress = 'localhost:3306';
	protected static $username = 'Standard User';
	protected static $password = 'hji9g50gsif56*-3';
	public $account;
	public $given_password;
	public $conn;
	public $mode;
	public $stores;
	
	public function __construct($account, $conn)
    {
		$account = 'jfullman';
		$conn = new mysqli($dbAdress, $username, $password);
		if($conn->connect_error)
		{
			die("Connection failure - " . $conn->connect_error);
		}
		echo $account, 'connected successfully';
		$mode = Authorise();
		switch($mode){
			case 0:
				die("Incorrect password");
			case 1:
				FetchPlans($this->account);
				//advance to plans page
				break;
			case 2:
				FetchStores($this->account);
				//(case 1)
    }
}
	function Authorise()
	{
		$sqlquery = 'SELECT Password, AuthLevel from costa.users WHERE `Username` = {$this->account}';
		$result = $conn->query($sqlquery);
		if ($result->num_rows == 1)
		{
			$row = mysqli_fetch_assoc($result);
		}
		else
		{
			die('User lookup error - {$this->account}');
		}
		if ($row['password'] == hash("sha256",$given_password))
		{
			if( $row['AuthLevel'] > 1){
				// New query/function here to collect all stores with user's district
				return $row['AuthLevel'];
			}
			else
			{
				return 1;
			}
		}
		else
		{
			return 0;
		}
	}
	
	public function FetchPlans($store){
		$sqlquery = 'SELECT 001, 002, 003, 004, 005, 006, 007, 008, 009, 010, 011, 012, 013, 014, 015, 016, 017, 018, 019, 020, 021, 022, 023, 024, 025, 026, 027, 028, 029, 030, 031, 032, 033, 034, 035, 036, 037, 038, 039, 040, 041, 042, 043, 044, 045, 046, 047, 048, 049, 050, 051, 052, 053, 054, 055, `Bakeoff Oven` from costa.users WHERE `Store Code` = $store';
		$result = $conn->query($sqlquery);
		$plans = [
			'Sweet' => [],
			'Savoury' => [],
			'Packaged_Savoury' => [],
			'Impulse' => [],
			'Pastry' => [],
			'Other' => []
		];
		$plancode = null;
		if ($result->num_rows == 1)
		{
			$values = mysqli_fetch_assoc($result);
		}
		else
		{
			die('Store lookup error - {$this->account}');
		}
		if ($values['Bakeoff Oven'] == 1)
		{
			$bakeoff = true;
		}
		else
		{
			$bakeoff = false;
		}
		foreach ($values as $key => $value)
		{
			if($value >= 1){
				$sqlquery = 'SELECT Category, BakeoffAlternative FROM costa.plans WHERE PlanCode = {$key}';
				$result = $conn->query($sqlquery);
				if ($result->num_rows == 1)
				{
					$row = mysqli_fetch_assoc($result);
				}
				else
				{
					die('Plan lookup error - {$this->account}');
				}
				if($row['BakeoffAlternative'] != null && $bakeoff){
					$plancode = $row['BakeoffAlternative'];
				}
				else
				{
                    $plancode = $key;
                }
				$plans[$row['category']][] = ['quantity' => $value, 'PlanCode' => $plancode];
			}
		}
	}
}
?>