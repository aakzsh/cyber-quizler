import 'package:flutter/material.dart';

class Name extends StatefulWidget {
  const Name({Key? key}) : super(key: key);

  @override
  State<Name> createState() => _NameState();
}

class _NameState extends State<Name> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
            decoration: BoxDecoration(
              image: DecorationImage(
                image: AssetImage("assets/bg.png"),
                fit: BoxFit.cover,
              ),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.all(20),
                  child: Text(
                    "Cyber-Quizler",
                    style: TextStyle(fontSize: 20),
                  ),
                ),
                Column(
                  children: <Widget>[
                    TextField(
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 50),
                      decoration: InputDecoration(
                          border: InputBorder.none,

                          // labelText: 'Enter Name',
                          hintText: 'Enter Your Name'),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    MaterialButton(
                      onPressed: () {},
                      child: Text("Let's Begin!"),
                    )
                  ],
                ),
                SizedBox(
                  height: 30,
                )
              ],
            )));
  }
}
