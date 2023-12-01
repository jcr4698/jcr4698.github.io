import React from "react";

type SectionProps = {
	section_title: string;
	section_content: React.ReactNode;
}

function InfoSection({ section_title, section_content }: SectionProps) {
	return (
		<div style={{margin: "5% 0"}}>
			{/* Section Pointer Shape */}
			<div className="section-shape-aligner" /*style={{paddingTop: "2%"}}*/>
				<div className="section-pointer-container">
					<div className="section-pointer"></div>
				</div>
			</div>

			{/* Section Title */}
			<section className="section-container">
				<div className="section-title-container" /*style={{paddingTop: "2.5%"}}*/>
					<div className="section-title">
						{section_title}
					</div>
				</div>
				<div className="section-content"> {/* section-content doesn't have a decorator css */}
					{section_content}
				</div>
			</section>
		</div>
	)
}

export { InfoSection }