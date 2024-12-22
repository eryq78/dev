<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
</head>
<body>
    <h1>Dashboard</h1>
    <ul>
        @foreach ($data as $item)
            <li>ID: {{ $item->id }} - Name: {{ $item->name }}</li>
        @endforeach
    </ul>
</body>
</html>
