// utils_web.dart
import 'dart:html' as html;

void downloadFile(String path) {
  // ignore: unused_local_variable
  final anchor = html.AnchorElement(href: path)
    ..download = path.split('/').last
    ..click();
}
