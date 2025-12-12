#!/usr/bin/env python3
"""
Day 1 Worksheet - Interactive UI
A simple GUI for children to complete their worksheet
"""

import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext
import json
import os
from datetime import datetime

class WorksheetUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Day 1 Worksheet - My First Python Program")
        self.root.geometry("900x700")
        self.root.configure(bg="#E8F4F8")
        
        # Data storage
        self.answers = {
            "name": "",
            "date": "",
            "q1": "",
            "q2": "",
            "q3": "",
            "exercise1": "",
            "exercise2": "",
            "challenge1": "",
            "challenge2": "",
            "reflection1": "",
            "reflection2": "",
            "reflection3": "",
            "reflection4": "",
            "next_learning": "",
            "bonus": "",
            "notes": ""
        }
        
        # Correct answers for checking
        self.correct_answers = {
            "q1": "It displays text on the screen",
            "q2": "quotes",  # Accept variations
            "q3": "3"  # Accept "3" or "three"
        }
        
        # Track which questions have been checked
        self.checked_questions = {
            "q1": False,
            "q2": False,
            "q3": False
        }
        
        self.setup_ui()
        self.load_saved_answers()
        self.update_score()  # Initialize score display
    
    def setup_ui(self):
        # Header
        header = tk.Frame(self.root, bg="#4A90E2", height=80)
        header.pack(fill=tk.X, padx=0, pady=0)
        
        title = tk.Label(
            header,
            text="🎉 Day 1 Worksheet: My First Python Program 🎉",
            font=("Arial", 18, "bold"),
            bg="#4A90E2",
            fg="white"
        )
        title.pack(pady=20)
        
        # Student info frame
        info_frame = tk.Frame(self.root, bg="#E8F4F8")
        info_frame.pack(fill=tk.X, padx=20, pady=10)
        
        tk.Label(
            info_frame,
            text="Name:",
            font=("Arial", 12),
            bg="#E8F4F8"
        ).pack(side=tk.LEFT, padx=5)
        
        self.name_entry = tk.Entry(info_frame, font=("Arial", 12), width=20)
        self.name_entry.pack(side=tk.LEFT, padx=5)
        self.name_entry.bind("<KeyRelease>", lambda e: self.save_answers())
        
        tk.Label(
            info_frame,
            text="Date:",
            font=("Arial", 12),
            bg="#E8F4F8"
        ).pack(side=tk.LEFT, padx=5)
        
        self.date_entry = tk.Entry(info_frame, font=("Arial", 12), width=15)
        self.date_entry.pack(side=tk.LEFT, padx=5)
        self.date_entry.insert(0, datetime.now().strftime("%Y-%m-%d"))
        self.date_entry.bind("<KeyRelease>", lambda e: self.save_answers())
        
        # Notebook for tabs
        self.notebook = ttk.Notebook(self.root)
        self.notebook.pack(fill=tk.BOTH, expand=True, padx=20, pady=10)
        
        # Create tabs
        self.create_part1_tab()
        self.create_part2_tab()
        self.create_part3_tab()
        self.create_part4_tab()
        self.create_bonus_tab()
        
        # Buttons frame
        button_frame = tk.Frame(self.root, bg="#E8F4F8")
        button_frame.pack(fill=tk.X, padx=20, pady=10)
        
        tk.Button(
            button_frame,
            text="💾 Save Answers",
            command=self.save_answers,
            bg="#50C878",
            fg="white",
            font=("Arial", 12, "bold"),
            padx=20,
            pady=5
        ).pack(side=tk.LEFT, padx=5)
        
        tk.Button(
            button_frame,
            text="🧪 Test My Code",
            command=self.test_code,
            bg="#FF6B6B",
            fg="white",
            font=("Arial", 12, "bold"),
            padx=20,
            pady=5
        ).pack(side=tk.LEFT, padx=5)
        
        tk.Button(
            button_frame,
            text="📄 View All Answers",
            command=self.view_answers,
            bg="#FFA500",
            fg="white",
            font=("Arial", 12, "bold"),
            padx=20,
            pady=5
        ).pack(side=tk.LEFT, padx=5)
    
    def create_part1_tab(self):
        """Part 1: Understanding Print"""
        tab = tk.Frame(self.notebook, bg="#E8F4F8")
        self.notebook.add(tab, text="Part 1: Understanding Print")
        
        # Scrollable frame
        canvas = tk.Canvas(tab, bg="#E8F4F8")
        scrollbar = ttk.Scrollbar(tab, orient="vertical", command=canvas.yview)
        scrollable_frame = tk.Frame(canvas, bg="#E8F4F8")
        
        scrollable_frame.bind(
            "<Configure>",
            lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
        )
        
        canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)
        
        # Question 1
        q1_frame = tk.LabelFrame(
            scrollable_frame,
            text="Question 1: What does the print() function do?",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        q1_frame.pack(fill=tk.X, padx=20, pady=10)
        
        self.q1_var = tk.StringVar()
        options = [
            "It makes the computer beep",
            "It displays text on the screen",
            "It saves your program",
            "It deletes text"
        ]
        for i, option in enumerate(options):
            tk.Radiobutton(
                q1_frame,
                text=option,
                variable=self.q1_var,
                value=option,
                font=("Arial", 11),
                bg="#E8F4F8",
                command=self.save_answers
            ).pack(anchor=tk.W, padx=10, pady=5)
        
        # Check button and feedback for Q1
        q1_button_frame = tk.Frame(q1_frame, bg="#E8F4F8")
        q1_button_frame.pack(fill=tk.X, padx=10, pady=5)
        
        self.q1_check_btn = tk.Button(
            q1_button_frame,
            text="✓ Check Answer",
            command=lambda: self.check_answer("q1", self.q1_var.get()),
            bg="#50C878",
            fg="white",
            font=("Arial", 10, "bold"),
            padx=15,
            pady=5
        )
        self.q1_check_btn.pack(side=tk.LEFT, padx=5)
        
        self.q1_feedback = tk.Label(
            q1_button_frame,
            text="",
            font=("Arial", 11, "bold"),
            bg="#E8F4F8"
        )
        self.q1_feedback.pack(side=tk.LEFT, padx=10)
        
        # Question 2
        q2_frame = tk.LabelFrame(
            scrollable_frame,
            text='Question 2: What is missing in this code?\nprint(Hello, World!)',
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        q2_frame.pack(fill=tk.X, padx=20, pady=10)
        
        self.q2_entry = tk.Entry(q2_frame, font=("Arial", 12), width=50)
        self.q2_entry.pack(padx=10, pady=5)
        self.q2_entry.bind("<KeyRelease>", lambda e: self.save_answers())
        
        # Check button and feedback for Q2
        q2_button_frame = tk.Frame(q2_frame, bg="#E8F4F8")
        q2_button_frame.pack(fill=tk.X, padx=10, pady=5)
        
        self.q2_check_btn = tk.Button(
            q2_button_frame,
            text="✓ Check Answer",
            command=lambda: self.check_answer("q2", self.q2_entry.get().strip().lower()),
            bg="#50C878",
            fg="white",
            font=("Arial", 10, "bold"),
            padx=15,
            pady=5
        )
        self.q2_check_btn.pack(side=tk.LEFT, padx=5)
        
        self.q2_feedback = tk.Label(
            q2_button_frame,
            text="",
            font=("Arial", 11, "bold"),
            bg="#E8F4F8"
        )
        self.q2_feedback.pack(side=tk.LEFT, padx=10)
        
        # Question 3
        q3_frame = tk.LabelFrame(
            scrollable_frame,
            text="Question 3: How many lines will this code print?\nprint(\"Line 1\")\nprint(\"Line 2\")\nprint(\"Line 3\")",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        q3_frame.pack(fill=tk.X, padx=20, pady=10)
        
        self.q3_entry = tk.Entry(q3_frame, font=("Arial", 12), width=20)
        self.q3_entry.pack(padx=10, pady=5)
        self.q3_entry.bind("<KeyRelease>", lambda e: self.save_answers())
        
        # Check button and feedback for Q3
        q3_button_frame = tk.Frame(q3_frame, bg="#E8F4F8")
        q3_button_frame.pack(fill=tk.X, padx=10, pady=5)
        
        self.q3_check_btn = tk.Button(
            q3_button_frame,
            text="✓ Check Answer",
            command=lambda: self.check_answer("q3", self.q3_entry.get().strip().lower()),
            bg="#50C878",
            fg="white",
            font=("Arial", 10, "bold"),
            padx=15,
            pady=5
        )
        self.q3_check_btn.pack(side=tk.LEFT, padx=5)
        
        self.q3_feedback = tk.Label(
            q3_button_frame,
            text="",
            font=("Arial", 11, "bold"),
            bg="#E8F4F8"
        )
        self.q3_feedback.pack(side=tk.LEFT, padx=10)
        
        # Score display
        score_frame = tk.Frame(scrollable_frame, bg="#E8F4F8")
        score_frame.pack(fill=tk.X, padx=20, pady=10)
        
        self.score_label = tk.Label(
            score_frame,
            text="Score: 0/3",
            font=("Arial", 14, "bold"),
            bg="#E8F4F8",
            fg="#4A90E2"
        )
        self.score_label.pack()
        
        # Navigation hint
        nav_hint = tk.Label(
            scrollable_frame,
            text="💡 Tip: Scroll down to see all questions, or click the tabs above to move to other parts!",
            font=("Arial", 10, "italic"),
            bg="#E8F4F8",
            fg="#666666"
        )
        nav_hint.pack(pady=10)
        
        canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
    
    def create_part2_tab(self):
        """Part 2: Code Practice"""
        tab = tk.Frame(self.notebook, bg="#E8F4F8")
        self.notebook.add(tab, text="Part 2: Code Practice")
        
        # Exercise 1
        ex1_frame = tk.LabelFrame(
            tab,
            text="Exercise 1: Fix the Code",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        ex1_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=10)
        
        tk.Label(
            ex1_frame,
            text="Find and fix the errors in this code:",
            font=("Arial", 11),
            bg="#E8F4F8"
        ).pack(anchor=tk.W, padx=10, pady=5)
        
        code_example = tk.Text(
            ex1_frame,
            height=4,
            font=("Courier", 10),
            bg="#F5F5F5",
            wrap=tk.WORD
        )
        code_example.insert("1.0", 'print("My name is Sarah)\nprint("I am 10 years old"\nprint("I love Python!")')
        code_example.config(state=tk.DISABLED)
        code_example.pack(fill=tk.X, padx=10, pady=5)
        
        tk.Label(
            ex1_frame,
            text="Your fixed code:",
            font=("Arial", 11, "bold"),
            bg="#E8F4F8"
        ).pack(anchor=tk.W, padx=10, pady=(10, 5))
        
        self.exercise1_text = scrolledtext.ScrolledText(
            ex1_frame,
            height=8,
            font=("Courier", 11),
            bg="white",
            wrap=tk.NONE
        )
        self.exercise1_text.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)
        self.exercise1_text.bind("<KeyRelease>", lambda e: self.save_answers())
        
        # Exercise 2
        ex2_frame = tk.LabelFrame(
            tab,
            text="Exercise 2: Create Your Own",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        ex2_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=10)
        
        tk.Label(
            ex2_frame,
            text="Write a program that prints:\n1. Your name\n2. Your favorite food\n3. Your favorite hobby\n4. An emoji you like",
            font=("Arial", 11),
            bg="#E8F4F8",
            justify=tk.LEFT
        ).pack(anchor=tk.W, padx=10, pady=5)
        
        self.exercise2_text = scrolledtext.ScrolledText(
            ex2_frame,
            height=10,
            font=("Courier", 11),
            bg="white",
            wrap=tk.NONE
        )
        self.exercise2_text.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)
        self.exercise2_text.bind("<KeyRelease>", lambda e: self.save_answers())
    
    def create_part3_tab(self):
        """Part 3: ASCII Art Challenge"""
        tab = tk.Frame(self.notebook, bg="#E8F4F8")
        self.notebook.add(tab, text="Part 3: ASCII Art")
        
        # Challenge 1
        ch1_frame = tk.LabelFrame(
            tab,
            text="Challenge 1: Complete the Pattern",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        ch1_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=10)
        
        tk.Label(
            ch1_frame,
            text="Fill in the missing lines:",
            font=("Arial", 11),
            bg="#E8F4F8"
        ).pack(anchor=tk.W, padx=10, pady=5)
        
        self.challenge1_text = scrolledtext.ScrolledText(
            ch1_frame,
            height=8,
            font=("Courier", 11),
            bg="white",
            wrap=tk.NONE
        )
        self.challenge1_text.insert("1.0", 'print("    *")\nprint("   ***")\nprint("  _____")  # Fill this in!\nprint(" _____")    # Fill this in!\nprint("    |")')
        self.challenge1_text.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)
        self.challenge1_text.bind("<KeyRelease>", lambda e: self.save_answers())
        
        # Challenge 2
        ch2_frame = tk.LabelFrame(
            tab,
            text="Challenge 2: Create Your Own Drawing",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        ch2_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=10)
        
        tk.Label(
            ch2_frame,
            text="Draw a simple picture using print statements!\nIt could be a house, smiley face, star, animal, or something creative!",
            font=("Arial", 11),
            bg="#E8F4F8",
            justify=tk.LEFT
        ).pack(anchor=tk.W, padx=10, pady=5)
        
        self.challenge2_text = scrolledtext.ScrolledText(
            ch2_frame,
            height=12,
            font=("Courier", 11),
            bg="white",
            wrap=tk.NONE
        )
        self.challenge2_text.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)
        self.challenge2_text.bind("<KeyRelease>", lambda e: self.save_answers())
    
    def create_part4_tab(self):
        """Part 4: Reflection"""
        tab = tk.Frame(self.notebook, bg="#E8F4F8")
        self.notebook.add(tab, text="Part 4: Reflection")
        
        canvas = tk.Canvas(tab, bg="#E8F4F8")
        scrollbar = ttk.Scrollbar(tab, orient="vertical", command=canvas.yview)
        scrollable_frame = tk.Frame(canvas, bg="#E8F4F8")
        
        scrollable_frame.bind(
            "<Configure>",
            lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
        )
        
        canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)
        
        # Reflection questions
        ref_frame = tk.LabelFrame(
            scrollable_frame,
            text="What I Learned Today",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        ref_frame.pack(fill=tk.X, padx=20, pady=10)
        
        questions = [
            ("1. Programming is:", "reflection1"),
            ("2. The print() function is used to:", "reflection2"),
            ("3. One thing I found easy:", "reflection3"),
            ("4. One thing I found challenging:", "reflection4")
        ]
        
        self.reflection_entries = {}
        for question, key in questions:
            tk.Label(
                ref_frame,
                text=question,
                font=("Arial", 11),
                bg="#E8F4F8"
            ).pack(anchor=tk.W, padx=10, pady=(10, 5))
            
            entry = tk.Entry(ref_frame, font=("Arial", 11), width=60)
            entry.pack(fill=tk.X, padx=10, pady=5)
            entry.bind("<KeyRelease>", lambda e: self.save_answers())
            self.reflection_entries[key] = entry
        
        # Next learning
        next_frame = tk.LabelFrame(
            scrollable_frame,
            text="What I Want to Learn Next",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        next_frame.pack(fill=tk.X, padx=20, pady=10)
        
        self.next_learning_text = scrolledtext.ScrolledText(
            next_frame,
            height=4,
            font=("Arial", 11),
            bg="white",
            wrap=tk.WORD
        )
        self.next_learning_text.pack(fill=tk.X, padx=10, pady=5)
        self.next_learning_text.bind("<KeyRelease>", lambda e: self.save_answers())
        
        # Notes
        notes_frame = tk.LabelFrame(
            scrollable_frame,
            text="Notes Section",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        notes_frame.pack(fill=tk.X, padx=20, pady=10)
        
        self.notes_text = scrolledtext.ScrolledText(
            notes_frame,
            height=6,
            font=("Arial", 11),
            bg="white",
            wrap=tk.WORD
        )
        self.notes_text.pack(fill=tk.X, padx=10, pady=5)
        self.notes_text.bind("<KeyRelease>", lambda e: self.save_answers())
        
        canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
    
    def create_bonus_tab(self):
        """Bonus Challenge"""
        tab = tk.Frame(self.notebook, bg="#E8F4F8")
        self.notebook.add(tab, text="⭐ Bonus Challenge")
        
        bonus_frame = tk.LabelFrame(
            tab,
            text="Bonus Challenge: Welcome Sign",
            font=("Arial", 12, "bold"),
            bg="#E8F4F8",
            padx=10,
            pady=10
        )
        bonus_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=10)
        
        tk.Label(
            bonus_frame,
            text="Create a program that prints a 'Welcome' sign for your room or desk!",
            font=("Arial", 11),
            bg="#E8F4F8"
        ).pack(anchor=tk.W, padx=10, pady=5)
        
        self.bonus_text = scrolledtext.ScrolledText(
            bonus_frame,
            height=15,
            font=("Courier", 11),
            bg="white",
            wrap=tk.NONE
        )
        self.bonus_text.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)
        self.bonus_text.bind("<KeyRelease>", lambda e: self.save_answers())
    
    def check_answer(self, question_id, user_answer):
        """Check if the answer is correct and provide feedback"""
        if not user_answer:
            messagebox.showinfo("No Answer", "Please enter an answer first!")
            return
        
        correct = self.correct_answers[question_id]
        is_correct = False
        
        # Check answer based on question type
        if question_id == "q1":
            # Multiple choice - exact match
            is_correct = user_answer == correct
        elif question_id == "q2":
            # Accept variations: quotes, quotation marks, "quotes", etc.
            answer_lower = user_answer.lower()
            is_correct = ("quote" in answer_lower or 
                         answer_lower == "quotes" or
                         answer_lower == '"' or
                         answer_lower == "'")
        elif question_id == "q3":
            # Accept "3" or "three"
            answer_lower = user_answer.lower()
            is_correct = (answer_lower == "3" or 
                         answer_lower == "three")
        
        # Update feedback label
        feedback_label = getattr(self, f"{question_id}_feedback")
        
        if is_correct:
            feedback_label.config(
                text="✓ Correct! Great job! 🎉",
                fg="#50C878"
            )
            self.checked_questions[question_id] = True
        else:
            feedback_label.config(
                text="✗ Not quite right. Try again! 💪",
                fg="#FF6B6B"
            )
            # Give a hint
            if question_id == "q2":
                hint = "Hint: What do you need around text in Python?"
            elif question_id == "q3":
                hint = "Hint: Count how many print() statements there are!"
            else:
                hint = "Think about what print() actually does!"
            
            # Show hint after a moment
            self.root.after(1000, lambda: feedback_label.config(
                text=f"✗ Not quite right. {hint}",
                fg="#FF6B6B"
            ))
        
        # Update score
        self.update_score()
    
    def update_score(self):
        """Calculate and display the current score"""
        score = sum(1 for q, checked in self.checked_questions.items() if checked)
        total = len(self.checked_questions)
        self.score_label.config(text=f"Score: {score}/{total} {'🌟' * score}")
    
    def save_answers(self):
        """Save all answers to a JSON file"""
        try:
            self.answers["name"] = self.name_entry.get()
            self.answers["date"] = self.date_entry.get()
            self.answers["q1"] = self.q1_var.get()
            self.answers["q2"] = self.q2_entry.get()
            self.answers["q3"] = self.q3_entry.get()
            self.answers["exercise1"] = self.exercise1_text.get("1.0", tk.END).strip()
            self.answers["exercise2"] = self.exercise2_text.get("1.0", tk.END).strip()
            self.answers["challenge1"] = self.challenge1_text.get("1.0", tk.END).strip()
            self.answers["challenge2"] = self.challenge2_text.get("1.0", tk.END).strip()
            self.answers["reflection1"] = self.reflection_entries["reflection1"].get()
            self.answers["reflection2"] = self.reflection_entries["reflection2"].get()
            self.answers["reflection3"] = self.reflection_entries["reflection3"].get()
            self.answers["reflection4"] = self.reflection_entries["reflection4"].get()
            self.answers["next_learning"] = self.next_learning_text.get("1.0", tk.END).strip()
            self.answers["bonus"] = self.bonus_text.get("1.0", tk.END).strip()
            self.answers["notes"] = self.notes_text.get("1.0", tk.END).strip()
            
            # Save to file
            save_file = "day1_worksheet_answers.json"
            save_data = {
                **self.answers,
                "checked_questions": self.checked_questions
            }
            with open(save_file, "w") as f:
                json.dump(save_data, f, indent=2)
            
            return True
        except Exception as e:
            messagebox.showerror("Error", f"Could not save answers: {str(e)}")
            return False
    
    def load_saved_answers(self):
        """Load previously saved answers"""
        save_file = "day1_worksheet_answers.json"
        if os.path.exists(save_file):
            try:
                with open(save_file, "r") as f:
                    save_data = json.load(f)
                
                # Extract answers and checked state
                self.answers = {k: v for k, v in save_data.items() if k != "checked_questions"}
                if "checked_questions" in save_data:
                    self.checked_questions = save_data["checked_questions"]
                
                # Load into UI
                self.name_entry.insert(0, self.answers.get("name", ""))
                self.date_entry.delete(0, tk.END)
                self.date_entry.insert(0, self.answers.get("date", datetime.now().strftime("%Y-%m-%d")))
                if self.answers.get("q1"):
                    self.q1_var.set(self.answers["q1"])
                self.q2_entry.insert(0, self.answers.get("q2", ""))
                self.q3_entry.insert(0, self.answers.get("q3", ""))
                
                # Restore feedback for checked questions
                if self.checked_questions.get("q1", False):
                    self.q1_feedback.config(text="✓ Correct! Great job! 🎉", fg="#50C878")
                if self.checked_questions.get("q2", False):
                    self.q2_feedback.config(text="✓ Correct! Great job! 🎉", fg="#50C878")
                if self.checked_questions.get("q3", False):
                    self.q3_feedback.config(text="✓ Correct! Great job! 🎉", fg="#50C878")
                self.exercise1_text.insert("1.0", self.answers.get("exercise1", ""))
                self.exercise2_text.insert("1.0", self.answers.get("exercise2", ""))
                self.challenge1_text.delete("1.0", tk.END)
                self.challenge1_text.insert("1.0", self.answers.get("challenge1", 'print("    *")\nprint("   ***")\nprint("  _____")  # Fill this in!\nprint(" _____")    # Fill this in!\nprint("    |")'))
                self.challenge2_text.insert("1.0", self.answers.get("challenge2", ""))
                self.reflection_entries["reflection1"].insert(0, self.answers.get("reflection1", ""))
                self.reflection_entries["reflection2"].insert(0, self.answers.get("reflection2", ""))
                self.reflection_entries["reflection3"].insert(0, self.answers.get("reflection3", ""))
                self.reflection_entries["reflection4"].insert(0, self.answers.get("reflection4", ""))
                self.next_learning_text.insert("1.0", self.answers.get("next_learning", ""))
                self.bonus_text.insert("1.0", self.answers.get("bonus", ""))
                self.notes_text.insert("1.0", self.answers.get("notes", ""))
            except Exception as e:
                print(f"Could not load saved answers: {e}")
    
    def test_code(self):
        """Test the code from the currently active tab"""
        # Get the current tab
        current_tab = self.notebook.index(self.notebook.select())
        
        code_to_test = ""
        tab_name = ""
        
        if current_tab == 1:  # Part 2
            # Check which exercise
            if self.exercise1_text.get("1.0", tk.END).strip():
                code_to_test = self.exercise1_text.get("1.0", tk.END)
                tab_name = "Exercise 1"
            elif self.exercise2_text.get("1.0", tk.END).strip():
                code_to_test = self.exercise2_text.get("1.0", tk.END)
                tab_name = "Exercise 2"
        elif current_tab == 2:  # Part 3
            if self.challenge1_text.get("1.0", tk.END).strip():
                code_to_test = self.challenge1_text.get("1.0", tk.END)
                tab_name = "Challenge 1"
            elif self.challenge2_text.get("1.0", tk.END).strip():
                code_to_test = self.challenge2_text.get("1.0", tk.END)
                tab_name = "Challenge 2"
        elif current_tab == 4:  # Bonus
            code_to_test = self.bonus_text.get("1.0", tk.END)
            tab_name = "Bonus Challenge"
        
        if not code_to_test.strip():
            messagebox.showinfo("No Code", "Please write some code first!")
            return
        
        # Create a test window
        test_window = tk.Toplevel(self.root)
        test_window.title(f"Test: {tab_name}")
        test_window.geometry("600x400")
        
        tk.Label(
            test_window,
            text=f"Output from {tab_name}:",
            font=("Arial", 12, "bold")
        ).pack(pady=10)
        
        output_text = scrolledtext.ScrolledText(
            test_window,
            height=15,
            font=("Courier", 11),
            bg="black",
            fg="white"
        )
        output_text.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)
        
        # Execute the code
        import io
        import sys
        
        old_stdout = sys.stdout
        sys.stdout = buffer = io.StringIO()
        
        try:
            exec(code_to_test)
            output = buffer.getvalue()
        except Exception as e:
            output = f"Error: {str(e)}"
        finally:
            sys.stdout = old_stdout
        
        output_text.insert("1.0", output)
        output_text.config(state=tk.DISABLED)
    
    def view_answers(self):
        """View all answers in a popup"""
        self.save_answers()  # Save first
        
        view_window = tk.Toplevel(self.root)
        view_window.title("All Your Answers")
        view_window.geometry("700x600")
        
        text_widget = scrolledtext.ScrolledText(
            view_window,
            font=("Arial", 11),
            wrap=tk.WORD
        )
        text_widget.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)
        
        output = f"Name: {self.answers['name']}\n"
        output += f"Date: {self.answers['date']}\n\n"
        output += "=" * 50 + "\n\n"
        output += "PART 1: Understanding Print\n"
        output += "-" * 50 + "\n"
        output += f"Q1: {self.answers['q1']}\n"
        output += f"Q2: {self.answers['q2']}\n"
        output += f"Q3: {self.answers['q3']}\n\n"
        output += "=" * 50 + "\n\n"
        output += "PART 2: Code Practice\n"
        output += "-" * 50 + "\n"
        output += f"Exercise 1:\n{self.answers['exercise1']}\n\n"
        output += f"Exercise 2:\n{self.answers['exercise2']}\n\n"
        output += "=" * 50 + "\n\n"
        output += "PART 3: ASCII Art\n"
        output += "-" * 50 + "\n"
        output += f"Challenge 1:\n{self.answers['challenge1']}\n\n"
        output += f"Challenge 2:\n{self.answers['challenge2']}\n\n"
        output += "=" * 50 + "\n\n"
        output += "PART 4: Reflection\n"
        output += "-" * 50 + "\n"
        output += f"1. {self.answers['reflection1']}\n"
        output += f"2. {self.answers['reflection2']}\n"
        output += f"3. {self.answers['reflection3']}\n"
        output += f"4. {self.answers['reflection4']}\n\n"
        output += f"What I want to learn next:\n{self.answers['next_learning']}\n\n"
        output += "=" * 50 + "\n\n"
        output += "BONUS CHALLENGE\n"
        output += "-" * 50 + "\n"
        output += f"{self.answers['bonus']}\n\n"
        output += "=" * 50 + "\n\n"
        output += "NOTES\n"
        output += "-" * 50 + "\n"
        output += f"{self.answers['notes']}\n"
        
        text_widget.insert("1.0", output)
        text_widget.config(state=tk.DISABLED)


def main():
    root = tk.Tk()
    app = WorksheetUI(root)
    root.mainloop()


if __name__ == "__main__":
    main()

