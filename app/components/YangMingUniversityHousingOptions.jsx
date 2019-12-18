import React from 'react';
import {
  StyledTitle,
  StyledText,
  StyledTableTitle,
  StyledListItem,
  StyledUnderline,
} from './program.styles';
import LearnMore from './LearnMore';

export default class YangMingUniversityHousingOptions extends React.PureComponent {
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper">
          <div className="section-container">
            <StyledTitle>
              Housing Options
            </StyledTitle>
            <StyledTableTitle>
              On Campus
            </StyledTableTitle>
            <StyledText>
              For students who decide to live on campus, the Chinese Overseas Flagship in Taiwan Program has coordinated with the
              Office of Student Affairs at NTU to provide Capstone Program students excellent accommodations in the Shui
              Yuan Dormitory Suites.
            </StyledText>
            <StyledText>
              The Shui Yuan dorms are conveniently located on campus and provide quick accessibility to classes.
            </StyledText>
            <StyledText>
              Students that choose to live in a dormitory will have a private bedroom and private bathroom. The dorm arrangement is suite
              style, with five private rooms that share common space. There is a large common laundry room. Electricity, cable, and internet
              are not included in rent and must be paid separately.
            </StyledText>
            <StyledText>
              <strong>Shui Yuan dorms include:</strong>
            </StyledText>
            <ul>
              <StyledListItem>
                Bed Frame (there is no mattress; one can be purchased at NTU or elsewhere)
              </StyledListItem>
              <StyledListItem>
                Desk and chair
              </StyledListItem>
              <StyledListItem>
                Clothing wardrobe
              </StyledListItem>
              <StyledListItem>
                Refrigerator
              </StyledListItem>
              <StyledListItem>
                Central AC
              </StyledListItem>
              <StyledListItem>
                Phone
              </StyledListItem>
              <StyledListItem>
                Small, private bathroom, with sink, toilet, and shower
              </StyledListItem>
              <StyledListItem>
                Common area (including a simple kitchen, tables and chairs, and couches)
              </StyledListItem>
            </ul>
            <br />
            <StyledText>
              Students will be expected to abide by the dorm regulations, provide a clean and quiet living space,
              and, most importantly, respect other students and roommates.
            </StyledText>
            <StyledText>
				Learn more about the <a href={"https://ntudorm.prince.com.tw/Introduction_List.aspx"}> Shui Yuan dorms</a>.
            </StyledText>
            <StyledText>
              For a helpful student's perspective on living in the Shui Yuan dorms, visit <a href={"https://philipchang.org/new-student-guide-ntu-shui-yuan-dormitory/"}>this website</a>.
            </StyledText>
            <br />
            <StyledUnderline />
            <br />
            <StyledTableTitle>
              Off Campus
            </StyledTableTitle>
            <StyledText>
              Students who decide to live off-campus are responsible for finding their own housing. All students living
              off-campus are expected to respect apartment regulations, as well as abide by all national and local laws.
              Further, off-campus students must still abide by all Flagship Program rules and regulations. Students who choose to live off-campus must have Taiwan Center staff approve their choice of rental unit and housing contract before signing any rental agreement.
            </StyledText>
            <StyledText>
              Some rental websites:
            </StyledText>
            <LearnMore
              text="Tsuei Ma Ma Foundation (recommended by NTU)"
			  href = "https://rent.tmm.org.tw/"
              center={false}
            />
            <br />
            <LearnMore
              text="591 house rental website"
			  href="https://www.591.com.tw/"
              center={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
