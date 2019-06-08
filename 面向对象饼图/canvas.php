<?php
header('Content-Type: application/json');
$data = [['title'=>'15-20岁', 'num'=>'5'], ['title'=>'20-25岁', 'num'=>'20'], ['title'=>'25-30岁', 'num'=>'12'], ['title'=>'30-35岁', 'num'=>'6'], ['title'=>'35-40岁', 'num'=>'5'], ['title'=>'40-45岁', 'num'=>'15']];
echo json_encode($data);