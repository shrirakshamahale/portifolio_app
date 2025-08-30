import 'package:flutter/material.dart';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';
import 'package:share_plus/share_plus.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:url_launcher/url_launcher.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'utils.dart';

void main() {
  runApp(const PortfolioApp());
}

// Main App
class PortfolioApp extends StatelessWidget {
  const PortfolioApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My Portfolio',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
        brightness: Brightness.light,
      ),
      debugShowCheckedModeBanner: false,
      home: const PortfolioHome(),
    );
  }
}

// Portfolio Home with Sidebar
class PortfolioHome extends StatefulWidget {
  const PortfolioHome({super.key});

  @override
  State<PortfolioHome> createState() => _PortfolioHomeState();
}

class _PortfolioHomeState extends State<PortfolioHome> {
  int _selectedIndex = 0;
  bool _showSidebar = false;

  final List<Widget> _pages = const [
    HomePage(),
    AboutPage(),
    SkillsPage(),
    ProjectsPage(),
    ResumePage(),
    CertificatePage(),
    MarksCardPage(),
    ContactPage(),
    ExtraCurricularPage(),
  ];

  void _selectPage(int index) {
    setState(() {
      _selectedIndex = index;
      _showSidebar = false; // close sidebar after selection
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Row(
            children: [
              // Sidebar
              AnimatedContainer(
                duration: const Duration(milliseconds: 300),
                width: _showSidebar ? 120 : 0,
                child: _showSidebar
                    ? Padding(
                        padding:
                            const EdgeInsets.only(top: 16), // adjust top
                        child: NavigationRail(
                          selectedIndex: _selectedIndex,
                          onDestinationSelected: _selectPage,
                          labelType: NavigationRailLabelType.all,
                          backgroundColor: Colors.indigo.shade50,
                          selectedIconTheme: const IconThemeData(
                              color: Colors.indigo, size: 35),
                          unselectedIconTheme:
                              const IconThemeData(color: Colors.grey, size: 35),
                          destinations: const [
                            NavigationRailDestination(
                              icon: Icon(Icons.home_outlined),
                              selectedIcon: Icon(Icons.home),
                              label: Text("Home"),
                            ),
                            NavigationRailDestination(
                              icon: Icon(Icons.person_outline),
                              selectedIcon: Icon(Icons.person),
                              label: Text("About"),
                            ),
                            NavigationRailDestination(
                              icon: Icon(Icons.build_outlined),
                              selectedIcon: Icon(Icons.build),
                              label: Text("Skills"),
                            ),
                            NavigationRailDestination(
                              icon: Icon(Icons.folder_open_outlined),
                              selectedIcon: Icon(Icons.folder),
                              label: Text("Projects"),
                            ),
                            NavigationRailDestination(
                              icon: Icon(Icons.article_outlined),
                              selectedIcon: Icon(Icons.article),
                              label: Text("Resume"),
                            ),
                            NavigationRailDestination(
                              icon: Icon(Icons.school_outlined),
                              selectedIcon: Icon(Icons.school),
                              label: Text("Certificates"),
                            ),
                            NavigationRailDestination(
                              icon: Icon(Icons.assignment_outlined),
                              selectedIcon: Icon(Icons.assignment),
                              label: Text("Marks Card"),
                            ),
                            NavigationRailDestination(
                              icon: Icon(Icons.contact_mail_outlined),
                              selectedIcon: Icon(Icons.contact_mail),
                              label: Text("Contact"),
                            ),
                            NavigationRailDestination(
                              icon: Icon(Icons.emoji_events_outlined),
                              selectedIcon: Icon(Icons.emoji_events),
                              label: Text("Extra Curricular"),
                            ),
                          ],
                        ),
                      )
                    : null,
              ),
              // Main content
              Expanded(child: _pages[_selectedIndex]),
            ],
          ),

          // Floating menu button at bottom-left
          Positioned(
            bottom: 16,
            left: 16,
            child: FloatingActionButton(
              backgroundColor: Colors.indigo,
              child: Icon(_showSidebar ? Icons.close : Icons.menu),
              onPressed: () {
                setState(() {
                  _showSidebar = !_showSidebar;
                });
              },
            ),
          ),
        ],
      ),
    );
  }
}
/// -------------------- Pages --------------------

class HomePage extends StatelessWidget {
  const HomePage({super.key});
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.indigo.shade50,
      child: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CircleAvatar(
              radius: 150,
              backgroundImage: AssetImage("assets/profile.jpg"),
            ),
            SizedBox(height: 25),
            Text(
              "ShriRaksha Ullas Mahale",
              style: TextStyle(
                fontSize: 26,
                fontWeight: FontWeight.bold,
                color: Colors.blueGrey,
              ),
            ),
            Text(
              "Computer Science Engineer",
              style: TextStyle(fontSize: 18, color: Colors.grey),
            ),
          ],
        ),
      ),
    );
  }
}

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.blue.shade50,
      child: const Padding(
        padding: EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "About Me",
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Colors.indigo,
              ),
            ),
            SizedBox(height: 10),
            Text(
              "I am a Computer Science Engineering student with a strong foundation in programming, software development, and modern computing concepts. "
              "Passionate about problem-solving and exploring innovative technologies to build real-world solutions. "
              "I enjoy working on projects that involve web development, system design, and scalable applications. "
              "Curiosity and continuous learning drive me to stay updated with the latest trends in technology. "
              "My goal is to contribute to impactful projects that combine creativity, efficiency, and innovation.",
              style: TextStyle(fontSize: 16, color: Colors.black87),
            ),
            SizedBox(height: 20),
            Text(
              "Languages I Speak:",
              style: TextStyle(
                fontSize: 30,
                fontWeight: FontWeight.bold,
                color: Colors.indigo,
              ),
            ),
            SizedBox(height: 20),
            Wrap(
              spacing: 15,
              children: [
                Chip(
                  label: Text("English"),
                  backgroundColor: Colors.indigoAccent,
                ),
                Chip(label: Text("Hindi"), backgroundColor: Colors.pinkAccent),
                Chip(
                  label: Text("Kannada"),
                  backgroundColor: Colors.greenAccent,
                ),
                Chip(
                  label: Text("Konkani"),
                  backgroundColor: Colors.orangeAccent,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class SkillsPage extends StatelessWidget {
  const SkillsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.green.shade50,
      child: const Padding(
        padding: EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "My Skills",
              style: TextStyle(
                fontSize: 30,
                fontWeight: FontWeight.bold,
                color: Colors.indigo,
              ),
            ),
            SizedBox(height: 15),
            Wrap(
              spacing: 10,
              runSpacing: 10,
              children: [
                Chip(
                  label: Text("Flutter"),
                  backgroundColor: Colors.blueAccent,
                ),
                Chip(label: Text("Dart"), backgroundColor: Colors.orangeAccent),
                Chip(label: Text("Firebase"), backgroundColor: Colors.amber),
                Chip(
                  label: Text("Digital System Design"),
                  backgroundColor: Colors.purpleAccent,
                ),
                Chip(
                  label: Text("UI/UX Design"),
                  backgroundColor: Colors.tealAccent,
                ),
                Chip(
                  label: Text("Git & GitHub"),
                  backgroundColor: Colors.redAccent,
                ),
                Chip(label: Text("JavaScript"), backgroundColor: Colors.yellow),
                Chip(
                  label: Text("Node.js"),
                  backgroundColor: Colors.greenAccent,
                ),
                Chip(
                  label: Text("SQL / NoSQL"),
                  backgroundColor: Colors.cyanAccent,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({super.key});

  Future<void> _launchURL(String url) async {
    final Uri uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      throw "Could not launch $url";
    }
  }

  @override
  Widget build(BuildContext context) {
    final projects = [
      {
        "title": "BMI Calculator App",
        "desc":
            "A user-friendly Flutter BMI Calculator that lets you calculate your BMI, track your BMI history with smooth charts, and understand your health status.",
        "image": "assets/projects/bmi.png",
        "link": "https://github.com/shrirakshamahale/body_max_index_calculator",
      },
      {
        "title": "Smart Campus Navigation",
        "desc":
            "MITE Campus Navigation App 📍 Seamless Login: Quick and easy access through the login page. Select Start & Destination: Choose your start and end locations from MITE campus",
        "image": "assets/projects/smart.png",
        "link": "https://github.com/shrirakshamahale/smart_campus_navigation",
      },
      {
        "title": "Quiz App",
        "desc":
            "This is a simple and basic Flutter Quiz App featuring multiple-choice questions. Users can log in, select answers, and view their final score",
        "image": "assets/projects/quiz.png",
        "link": "https://github.com/shrirakshamahale/flutter_quiz_app",
      },
      {
        "title": "Bus Reservation System",
        "desc":
            "Bus Reservation System 🚍 Book a Seat: Choose an available seat to reserve for your journey. Cancel a Seat: Cancel your reservation to free up a seat. View Available Seats: Check the status of all seats to see how many are available.",
        "image": "assets/projects/bus.png",
        "link": "https://github.com/shrirakshamahale/bus_reservationsystem",
      },
      {
        "title": "Hospital Management  System",
        "desc":
            "About A Doctor-Patient Management System to track doctor details, patient records, treatments, and appointments. It helps organize and manage healthcare efficiently by storing personal info, medical histories, treatment details.",
        "image": "assets/projects/hospi.png",
        "link":
            "https://github.com/shrirakshamahale/hospital_management_system",
      },
    ];

    int crossAxisCount = MediaQuery.of(context).size.width < 130 ? 1 : 1;

    return Container(
      color: Colors.orange.shade50,
      child: GridView.builder(
        padding: const EdgeInsets.all(20),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: crossAxisCount,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
          childAspectRatio: 4 / 3,
        ),
        itemCount: projects.length,
        itemBuilder: (context, index) {
          final project = projects[index];
          return Card(
            elevation: 6,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
            color: Colors.white,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Expanded(
                  child: ClipRRect(
                    borderRadius: const BorderRadius.vertical(
                      top: Radius.circular(12),
                    ),
                    child: Image.asset(project["image"]!, fit: BoxFit.cover),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        project["title"]!,
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: Colors.indigo,
                        ),
                      ),
                      Text(
                        project["desc"]!,
                        style: const TextStyle(
                          fontSize: 12,
                          color: Colors.black54,
                        ),
                      ),
                      Align(
                        alignment: Alignment.centerRight,
                        child: IconButton(
                          icon: const Icon(
                            Icons.open_in_new,
                            color: Colors.indigo,
                          ),
                          onPressed: () => _launchURL(project["link"]!),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

/// ---------------- Resume Page ---------------

class ResumePage extends StatelessWidget {
  const ResumePage({super.key});

  Future<void> _downloadOrShareResume() async {
    const fileName = "resume.png";
    const assetPath = "assets/resume.png";

    if (kIsWeb) {
      // ✅ Web: download directly
      downloadFile(assetPath);
    } else {
      try {
        // ✅ Mobile/Desktop: save temp file and share
        final byteData = await rootBundle.load(assetPath);
        final Uint8List bytes = byteData.buffer.asUint8List();

        final tempDir = await getTemporaryDirectory();
        final file = File("${tempDir.path}/$fileName");
        await file.writeAsBytes(bytes);

        await Share.shareXFiles([XFile(file.path)],
            text: "Check out my resume!");
      } catch (e) {
        debugPrint("Error sharing file: $e");
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("My Resume"),
        backgroundColor: Colors.purple,
        actions: [
          ElevatedButton.icon(
            onPressed: _downloadOrShareResume,
            icon: const Icon(Icons.download),
            label: const Text("Download Resume"),
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.white,
              foregroundColor: Colors.purple,
            ),
          ),
        ],
      ),
      body: Center(
        child: InteractiveViewer(
          panEnabled: true,
          minScale: 0.5,
          maxScale: 4,
          child: Image.asset(
            "assets/resume.png",
            fit: BoxFit.contain,
          ),
        ),
      ),
    );
  }
}

/// ---------------- Certificates Page ----------------

class CertificatePage extends StatelessWidget {
  const CertificatePage({super.key});

  Future<void> _launchURL(String url) async {
    final Uri uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      throw "Could not launch $url";
    }
  }

  @override
  Widget build(BuildContext context) {
    final certificates = [
      {
        "title": "Introdoction To Python ",
        "image": "assets/certificates/python.png",
      },
      {
        "title": "C Programming",
        "image": "assets/certificates/c.png",
      },
      {
        "title": "SAP Hackfest ",
        "image": "assets/certificates/sap.png",
      },
      {
        "title": "Artifical Intelligence ",
        "image": "assets/certificates/artifical.png",
      },
    ];

    int crossAxisCount = MediaQuery.of(context).size.width < 130 ? 1 : 1;

    return Container(
      color: Colors.teal.shade50,
      child: GridView.builder(
        padding: const EdgeInsets.all(20),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: crossAxisCount,
          crossAxisSpacing: 12,
          mainAxisSpacing: 12,
          childAspectRatio: 4 / 3,
        ),
        itemCount: certificates.length,
        itemBuilder: (context, index) {
          final cert = certificates[index];
          return Card(
            elevation: 6,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
            child: InkWell(
              onTap: () => _launchURL(cert["link"]!),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Expanded(
                    child: ClipRRect(
                      borderRadius: const BorderRadius.vertical(
                        top: Radius.circular(12),
                      ),
                      child: Image.asset(cert["image"]!, fit: BoxFit.cover),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      cert["title"]!,
                      style: const TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                        color: Colors.indigo,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

/// ---------------- Contact Page ----------------

class ContactPage extends StatelessWidget {
  const ContactPage({super.key});

  Future<void> _launchURL(String url) async {
    final Uri uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      throw "Could not launch $url";
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red.shade50,
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              "Contact Me",
              style: TextStyle(
                fontSize: 45,
                fontWeight: FontWeight.bold,
                color: Colors.indigo,
              ),
            ),
            const SizedBox(height: 50),
            const Row(
              children: [
                Icon(Icons.email, color: Colors.red),
                SizedBox(width: 50),
                Text(
                  "shrirakshamahale24@gmail.com",
                  style: TextStyle(color: Colors.black87),
                ),
              ],
            ),
            const SizedBox(height: 50),
            InkWell(
              onTap: () => _launchURL("https://github.com/shrirakshamahale"),
              child: const Row(
                children: [
                  FaIcon(FontAwesomeIcons.github, color: Colors.black),
                  SizedBox(width: 50),
                  Text("GitHub", style: TextStyle(color: Colors.black87)),
                ],
              ),
            ),
            const SizedBox(height: 50),
            InkWell(
              onTap: () => _launchURL(
                  "https://www.linkedin.com/in/shriraksha-mahale-b85803318/"),
              child: const Row(
                children: [
                  FaIcon(FontAwesomeIcons.linkedin, color: Colors.blue),
                  SizedBox(width: 50),
                  Text("LinkedIn", style: TextStyle(color: Colors.black87)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class MarksCardPage extends StatelessWidget {
  const MarksCardPage({super.key});

  // Fix: use the passed parameters and implement download logic here
  void _downloadFile(String path, String fileName) {
    // For now, just print the info. Later, implement actual file saving.
    print("Downloading $fileName from $path");

    // Example: To actually download, use packages like 'dio' or 'flutter_file_dialog'
  }

  @override
  Widget build(BuildContext context) {
    final marksCards = [
      {"title": "Semester 1", "image": "assets/markscard/1sem.png"},
      {"title": "Semester 2", "image": "assets/markscard/2sem.png"},
      {"title": "Semester 3", "image": "assets/markscard/3sem.png"},
      {"title": "Semester 4", "image": "assets/markscard/4sem.png"},
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text("My Marks Cards"),
        backgroundColor: Colors.purple,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: marksCards.length,
        itemBuilder: (context, index) {
          final card = marksCards[index];
          return Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // Title + Download Button
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    card["title"]!,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 18,
                      color: Colors.purple,
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.download, color: Colors.purple),
                    onPressed: () {
                      // Pass correct parameters
                      _downloadFile(card["image"]!, "${card["title"]}.png");
                    },
                  ),
                ],
              ),
              const SizedBox(height: 8),

              // Marks Card Image
              ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: Image.asset(
                  card["image"]!,
                  fit: BoxFit.contain,
                ),
              ),
              const SizedBox(height: 24),
            ],
          );
        },
      ),
    );
  }
}

class ExtraCurricularPage extends StatelessWidget {
  const ExtraCurricularPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Extra Curricular Activities"),
        backgroundColor: Colors.purple,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              "My Extra Curricular Activities",
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 28),

            // Activity List
            const Text(
              "🏆 Shortlisted in inter-college Ideathon\n"
              "🏫 Created awareness about voting - Moodbidri\n"
              "👨‍💻 Took active participation in workshops\n"
              "📚 Volunteered in student AICTE activity\n"
              "🩸 Took part in NSS blood donation camps",
              style: TextStyle(fontSize: 18, height: 1.6),
            ),

            const SizedBox(height: 25),

            // Show image of activity
            ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: Image.asset(
                "assets/extraciricular/energy.jpg", // ✅ check spelling in assets
                fit: BoxFit.cover,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
