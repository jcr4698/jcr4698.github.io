import React, { useEffect, useRef } from 'react';

// stylesheets
import './App.css';
import './style/about_me.css';
import './style/education.css';
import './style/experience.css';
import './style/projects.css';
import './style/social_media.css';

// utilities
import {updateStickyNavbar} from './util/sticky_navbar';

// typescript functions
import {InfoSection} from './components/section';
import {RelevantCoursework} from './components/relevant_courses';
import {Experience} from './components/experience';
import {Projects} from './components/projects';
import { SocialMedia } from './components/social_media';

// images to be used
import galaxy_banner from './content/New_JWST_Dwarf_Galaxy_Banner.png';
import project_hardware_manager from './content/Project_Hardware_Manager.png';
import stallion_file_finder from './content/File_Finder_Example.png';
import inline_testing from './content/Inline_Tests_Example.png';
import dcxer from './content/DCXer_Example.png';
import jan_auction from './content/Jan_Auction.png';

function App() {

	const navbarOffset = useRef(0);

	useEffect(() => {
		window.addEventListener("resize", () => {

			// assign value of navbar offset based on static element
			const portfolio_title = document.getElementById("pre-tabs-static");
			if(portfolio_title) {
				const title_offset = portfolio_title.offsetTop;
				const title_height = portfolio_title.offsetHeight;
				const title_margin = Number.parseFloat(window.getComputedStyle(portfolio_title).marginTop);

				navbarOffset.current = title_offset + title_height + title_margin;
			}
		})
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const windowYoffset = window.scrollY;
			updateStickyNavbar(windowYoffset, navbarOffset.current);
		});
	}, [navbarOffset]);

	return (
		<>
			{/* Banner and Profile Pictures */}
			<div className="banner-container">
				<div className="banner" style={{ backgroundImage: `url(${galaxy_banner})`}}>
					
					<div className="banner-tech-section" style={{float: "left"}}>
						<div className="banner-tech-icon-container">
							<i className="devicon-typescript-plain colored"></i>
						</div>
						<div className="banner-tech-icon-container">
						<i className="devicon-react-original colored"></i>
						</div>
						<div className="banner-tech-icon-container">
							<i className="devicon-mysql-plain colored"></i>
						</div>
						<div className="banner-tech-icon-container">
							<i className="devicon-java-plain colored"></i>
						</div>
						<div className="banner-tech-icon-container">
							<i className="devicon-python-plain colored"></i>
						</div>
						<div className="banner-tech-icon-container">
							<i className="devicon-c-plain colored"></i>
						</div>
					</div>

					<div className="banner-tech-section" style={{float: "right"}}>
						<div className="banner-tech-icon-container">
							<i className="devicon-github-original colored"></i>
						</div>
						<div className="banner-tech-icon-container">
						<i className="devicon-docker-plain colored"></i>
						</div>
						<div className="banner-tech-icon-container">
							<i className="devicon-javascript-plain colored"></i>
						</div>
						<div className="banner-tech-icon-container">
							<i className="devicon-spring-plain colored"></i>
						</div>
						<div className="banner-tech-icon-container">
							<i className="devicon-flask-original colored"></i>
						</div>
						<div className="banner-tech-icon-container">
							<i className="devicon-html5-plain colored"></i>
						</div>
					</div>

				</div>
			</div>

			{/* Portfolio Name */}
			<div className="portfolio-header" id="pre-tabs-static">
				<div className="portfolio-name">
					Jan Carlos Rubio Sánchez
				</div>
				<div id="about-me"></div>
			</div>

			{/* Navigation Bar */}
			<div className="portfolio-header" id="tabs" ref={(e) => e? navbarOffset.current = (e?.offsetTop) : (null)}>
				<ul className="nav-bar">
					<li className="nav-tab-container">
						<button
							className="nav-tab"
							onClick={() => document.getElementById('about-me')?.scrollIntoView()}>
							about me
						</button>
					</li>
					<li className="nav-tab-container">
						<button
							className="nav-tab"
							onClick={() => document.getElementById('academics')?.scrollIntoView()}>
							academics
						</button>
					</li>
					<li className="nav-tab-container">
						<button
							className="nav-tab"
							onClick={() => document.getElementById('experience')?.scrollIntoView()}>
							experience
						</button>
					</li>
					<li className="nav-tab-container">
						<button
							className="nav-tab"
							onClick={() => document.getElementById('projects')?.scrollIntoView()}>
							projects
						</button>
					</li>
					<li className="nav-tab-container">
						<button
							className="nav-tab"
							onClick={() => document.getElementById('socials')?.scrollIntoView()}>
							socials
						</button>
					</li>
				</ul>
			</div>

			<div className="portfolio-content">
				
				{/* About Me Section */}
				<InfoSection section_title="About Me"
					section_content={
						<>
						<div className="me-side-by-side">
							<div className="me-image-container">
								<img className='me-image' alt="Jan Profile" src={require("./content/IMG_7898.jpg")}></img>
							</div>
							<div className="me-desc-container">
								<div>
									<div className="me-desc" style={{fontWeight: "bold"}}>Jan Carlos Rubio Sanchez</div>
									<div className="me-desc" style={{fontStyle: "italic"}}>B.S. in Electrical & Computer Engineering</div>
									<div className="me-desc" style={{fontStyle: "italic"}}>Technical Track: Software Engineering</div>
									<div className="me-desc" style={{fontStyle: "italic"}}>
										Hello, I am a recent college graduate with degree in Software Engineering and a strong
										foundation in hardware. I believe that a good program doesn't need fancy parts, but rather
										efficient code and metal components that work co-dependently to solve a problem effectively.
									</div>
								</div>
							</div>
						</div>
						<div id="academics"></div>
						</>
					}
				/>

				{/* Education Section */}
				<InfoSection section_title="Academics"
					section_content={
						<>
							<div className="edu-side-by-side">
								<div className="edu-desc-container">
									<div className="edu-desc">
										I recently received a Bachelor's in Electrical & Computer Engineering
										from the University of Texas at Austin with a technical focus in
										Software Engineering.
									</div>
								</div>
								<div className="edu-image-container">
									<img className="edu-image" src={require("./content/UT_Austin_Emblem.png")} alt="UT Austin"></img>
								</div>
							</div>

							<RelevantCoursework
								courses={
									JSON.stringify({
										"Software Engineering Laboratory – ": "Full Stack Development & Software Development Life Cycle",
										"Senior Engineering Design Laboratory – ": "Honors Engineering Capstone Project Design",
										"Requirements Engineering – ": "Acquisition, Modeling, Analysis & Dissemination of Requirements",
										"Software Testing – ": "Software Testing Theory & Practice in Java",
										"Data Science Laboratory – ": "Machine Learning Models & Statistics",
										"Operating Systems – ": "Fundamentals of Operating Systems",
										"Algorithms – ": "Proof-based Reasoning & Implementation of Algorithms",
										"Software Design & Design II – ": "Data Structures & Algorithm analysis in Java",
										"Software Design & Design I – ": "Data Structures & Algorithm analysis in C/C++",
										"Digital Logic – ": "FPGA Development & Analysis in Verilog",
									})
								}
							/>
							<div id="experience"></div>
						</>
					}
				/>
				
				{/* Experience Section */}
				<InfoSection section_title="Experience"
					section_content={
						<>
							<Experience
								jobs={
									[
										JSON.stringify({
											"employer": "Texas Advanced Computing Center",
											"location": "Austin, TX",
											"duration": "August 2019 – August 2023",
											"position": "Undergraduate Research Assistant",
											"description": [
												"Developed Stallion File Finder, a library of C modules interfaced with the Gimp Tool Kit, for the purpose of enabling efficient search and management of research data in the project’s directory.",
												"Implemented an effective convention of organizing the Visualizations Lab’s file directory using the terminal environment and Unix-specific tools.",
												"Provided operation and technical maintenance to systems during normal laboratory hours and reserved events such as UT’s Girl Day, Adam Clulow’s JapanLab & The Virtual Angkor project, and PBS’s New Eye on the Universe.",
												"Contributed to the re-design and Spanish translation of the Visualizations Lab webpage using their HTML code and content.",
												"Created the Visualizations Lab Virtual Tour and Data Center Virtual Tour using 360 panoramic technologies to promote Covid-19 remote education and isolation practices.",
												"Visited and photographed the Waller Creek to develop an immersive visualization for Archiving the History and Science of Waller Creek, Austin, TX as part of Explore UT.",
												"Developed public speaking skills by catering an educational environment to incoming visitors using visualization technologies such as display clusters, interactive screens, and virtual reality."
											]
										}),
										JSON.stringify({
											"employer": "Code@TACC Summer Camps",
											"location": "Austin, TX",
											"duration": "June 2021 – July 2023",
											"position": "Technical Instruction Assistant",
											"descriptions": [
												{"sub_desc_title": "Cybersecurity",
												 "sub_desc": [
													"Reinforced concepts on cyber threats such as Injection, DDoS & Phishing attacks, and defense strategies such as Cryptography, System Hardening & Threat Modeling.",
													"Assisted in navigation of the Linux environment using terminal commands, programming algorithms & data structures using Python, and analyzing network traffic using Wireshark.",
													"Guided students to build and set-up a Raspberry Pi computer with the goal of introducing them to Kali Linux and other tools used by white hat hackers."
												]},
												{"sub_desc_title": "Robotics",
												"sub_desc": [
													"Reinforced concepts on robotics such as Machine Learning, Object Oriented Programming, and Image Processing.",
													"Assisted in programming algorithms & data structures using Python and setting up Raspberry Pi computers for laboratory purposes.",
													"Helped in AutoAuto Labs robotic car instruction sessions by guiding students in the AutoAuto python library and interactions between code and mechanical components."
												]},
												{"sub_desc_title": "Environmental Technology",
												"sub_desc": [
													"Reinforced concepts in environmental technology such as data collection & analysis, data-driven development, and environmental awareness.",
													"Assisted in the operation of the Raspberry Pi and Enviro+ to transform environmental values into virtual data on Jupyter Notebooks.",
													"Helped students utilize engineering tools such as Sensors, General-Purpose Input & Output Pins, and Enviro-related Python Libraries."
												]}
											]
										})
									]
								}
							/>
							<div id="projects"></div>
						</>
					}
				/>

				{/* Projects */}
				<>
					<InfoSection section_title="Projects"
						section_content={
							<Projects
								projects={
									[
										JSON.stringify({
											"title": "Hardware Checkout App",
											"desc_brief": "Web Application",
											"visual": project_hardware_manager.toString(),
											"links": [
												{
													"button": "try demo",
													"url": "https://jcr4698.github.io/Hardware_Checkout/"
												},
												{
													"button": "visit website",
													"url": "https://team-project-ece461l.herokuapp.com/"
												}
											],
											"desc_bullets": [
												"A website that allows users to log in and manage their projects by checking in/out hardware sets.",
												"Bringing together ReactJS, HTML, CSS, Flask, MongoDB non-relational database, and Heroku deployment."
											],
											"github": "https://github.com/jcr4698/ECE461L_Team_Project"
										}),
										JSON.stringify({
											"title": "Stallion File Finder",
											"desc_brief": "Library of Data Management Tools developed in C",
											"visual": stallion_file_finder.toString(),
											"links": [],
											"desc_bullets": [
												"A library that allows users to document and navigate data through the terminal or its graphical user interface.",
												"Implementation of the Linux utility library, process system calls, and the GTK widget toolkit."
											],
											"github": "https://github.com/jcr4698/Stallion_File_Finder"
										}),
										JSON.stringify({
											"title": "Inline Testing",
											"desc_brief": "Machine Learning Honors Senior Project",
											"visual": inline_testing.toString(),
											"links": [],
											"desc_bullets": [
												"Decision tree binary classifier that determines the worthiness of a program statement to have an I-Test.",
												"Team project that advances the study of Inline Testing as a testing framework for Python and Java."
											],
											"github": "https://github.com/MichaelFortanely/InlineTesting"
										}),
										JSON.stringify({
											"title": "DCXer",
											"desc_brief": "File Automation Tool developed in Python",
											"visual": dcxer.toString(),
											"links": [],
											"desc_bullets": [
												"An automated visualization tool that allows researchers to create neatly organized Display Cluster files (DCX) quickly and efficiently.",
												"The program was developed in Python and uses operating system commands to access the file system and multi-process capabilities.",
												"For the front-end side, Zenity was utilized to provide a file selection prompt for ease of use."
											],
											"github": "https://github.com/jcr4698/DCXer"
										}),
										JSON.stringify({
											"title": "Offensive Text Detection",
											"desc_brief": "Machine Learning & Data Science Project",
											"visual_link": "https://clipchamp.com/watch/WP8xuRuz2EZ/embed",
											"links": [],
											"desc_bullets": [
												"Team project with the goal of researching the field of natural processing language.",
												"Multi-Layered Perceptron classifier that predicts whether a given string of text is offensive or not.",
												"The dataset used was a collection of comments & replies obtained from social media platforms such as Twitter, Reddit, and Facebook."
											],
											"github": "https://github.com/lukepyoungs/DataScienceLabFinal"
										}),
										JSON.stringify({
											"title": "Jan's Auction",
											"desc_brief": "Java Server-Client Network",
											"visual": jan_auction.toString(),
											"links": [],
											"desc_bullets": [
												"Bidding Server that handles simultaneous clients and provides a graphic user interface for ease of use.",
												"Application of socket programming, JavaFX Interfacing, and multithreading."
											],
											"github": "https://github.com/jcr4698/Bidding_Server_Client_Network"
										})
									]
								}
							/>
						}
					/>
					<div id="socials"></div>
				</>

				{/* Social Media */}
				<InfoSection section_title="Social Media"
					section_content={
						<SocialMedia
							media={
								[
									JSON.stringify({
										"media": "gmail",
										"url": ""
									}),
									JSON.stringify({
										"media": "linkedin",
										"url": ""
									}),
									JSON.stringify({
										"media": "github",
										"url": ""
									}),
									JSON.stringify({
										"media": "codepen.io",
										"url": ""
									}),
									JSON.stringify({
										"media": "scratch",
										"url": ""
									}),
									JSON.stringify({
										"media": "twitter",
										"url": ""
									}),
									JSON.stringify({
										"media": "facebook",
										"url": ""
									}),
									JSON.stringify({
										"media": "instagram",
										"url": ""
									}),
									JSON.stringify({
										"media": "discord",
										"url": ""
									})
								]
							}
						/>
					}
				/>

			</div>
		</>
	);
}

export default App;
