<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<style type="text/css">
		form{
			margin-top: 12px;
			border: dashed black;
		}
	</style>
</head>
<body>
<form>
	<div>
		<input type="number" name="num1">
	</div>
	<div>
		<input type="submit" name="operator">
		<select name="op">
			<option value="+">add</option>
			<option value="-">sub</option>
			<option value="/">div</option>
			<option value="*">mult</option>
		</select>
	</div>
	<div>
		<input type="number" name="num2">
	</div>
</form>
</body>
</html>