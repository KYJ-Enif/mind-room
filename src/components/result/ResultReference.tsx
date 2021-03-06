import React, { useEffect } from 'react';
import useLanguage from '../../hooks/useLanguage';

type ResultReferenceProps = {
    close: () => void;
}

function ResultReference({ close }: ResultReferenceProps) {

    const { isEnglish } = useLanguage();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="result-popup" onClick={() => close()}>
            <button className="result-popup-btn-close">
                <i className="ri-close-fill"></i>
            </button>
            {
                isEnglish
                    ?
                    <>
                        <h4>&lt;Project Management&gt;</h4>
                        <p>Syeon</p>
                        <h4>&lt;Questionnaire Development&gt;</h4>
                        <p>Syeon</p>
                        <h4>&lt;Writing&gt;</h4>
                        <p>Syeon</p>
                        <h4>&lt;Illustration and Design&gt;</h4>
                        <p>Syeon</p>
                        <h4>&lt;Programming&gt;</h4>
                        <p>Enif</p>
                        <h4>&lt;Sound Design&gt;</h4>
                        <p>Myn, Syeon</p>
                        <h4>&lt;Reference sources&gt;</h4>
                        <h5>- Books -</h5>
                        <ul>
                            <li>Eric Ackroyd. A dictionary of Dream Symbols. edited by B.J.Kim (Seoul: Korean Institute for Contemporary Psychoanalysis, 1997)</li>
                            <li>Lilian Verner-Bonds. The Complete Book of Colour healing. edited by C.H Han  (Seoul: Kukjebook, 2008)</li>
                            <li>Linda Picone. Daily Book of Positive Quotations. edited by Guihwa Hwang Blanz, (Seoul: Checkpoint, 2012)</li>
                            <li>Sun Hyun Kim. Color changes your body (Paju; GyeongGi-Do: Nexus, 2009) </li>
                            <li>Hyeon Hee Jeong. Art Theraphy. (Seoul: Hakjisa, 2018)</li>
                            <li>Sun Hyun Kim. Color Therapy. (Paju; GyeongGi-Do: Idam Books, 2013)</li>
                            <li>Sun Hyun Kim. The power of masterpiece. (Paju; GyeongGi-Do: Eight Point, 2015)</li>
                        </ul>
                        <h5>- Journal articles -</h5>
                        <ul>
                            <li>G.G.Yoon, K.W.Kang and S.H.Jung, ‘Effects Psychological Response Light & Color’, Journal of Korean Institute of Interior Design, 14(3) (2005): 199-207.</li>
                            <li>H.S.Park, C.S.Lee, J.S.Jang, K.H.Lee and H.T.Kim, ‘A Consideration and Prospects of Psychological Research on Lighting’, THE KOREAN JOURNAL OF PSYCHOLOGY : GENERAL, 30(1) (2011): 23-43.</li>
                            <li>H.J.Jeong and N.Y.Lim, ‘A Concept Mapping Applying Art Psychology Perspective of Visitors’ Self-reflection Experiences in Exhibitions’, Korean Journal of Arts Therapy, 20(2) (2020): 1-19.</li>
                            <li>J.Choo. ‘A study on Color Environment of Art Therapy Space Based on Colortherapy’, Korean Journal of Art Therapy, 16(6) (2009): 1089-1110.</li>
                            <li>J.H.Min and G.S.Choi. ‘Study on Color & Texture Image of Finishing Material by Interior Component’, Journal of Korea Society of Color Studies, 28(4) (2014): 75-87.</li>
                            <li>J.S.Lee, E.M.Jin and Y.M.Park, ‘The Analysis of Discriminating Color Features as shown through the Interior Finishing Materials’, Journal of Korea Society of Color Studies, 16(2,3) (2002): 77-87.</li>
                            <li>M.J.Jang, . ‘An Exploratory Study on Interior Therapy’, Journal of Korean Institute of Interior Design, 26(1) (2017): 124-133.</li>
                            <li>M.J.Jang,  ‘A Study of Interior Therapy based on Psychological Image Interpretation by Carl Jung’, Journal of Korean Institute of Interior Design, 27(2) (2018): 128-142.</li>
                            <li>M.J.Jang and J.M.Rhie, ‘Connective Possibility of Eco Therapy in Interior Therapy’, Journal of the Korean society of floral art & design, 40(40) (2019): 3-24.</li>
                            <li>S.H.Chung, ‘A Study on Relationships between Space and Object based on Color Theory’, Bulletin of Korean Society of Basic Design & Art, 10(1) (2009): 461-469.</li>
                            <li>S.T.Kim and S.B.Park, ‘A Study on the Characteristics of Interior Design of Space for Child Psychiatric Therapy’. Journal of Korean Institute of Interior Design, 12(3) (2010): 188-191.</li>
                            <li>Y.G.Kwon and J.E.Park, ‘A Study on the Therapeutic Color Design Method in Residential Space’, Journal of Korea Society of Color Studies, 19 (2) (2005): 11-20.</li>
                            <li>Y.H.Lee, ‘Associations Between Dream Intensity, Typical Dream Themes, Attitude Towards Dreams, and Psychopathology’, Korean Journal of Clinical Psychology, 30(2)  (2011): 419-439.</li>
                        </ul>
                        <h5>- Dissertation -</h5>
                        <ul>
                            <li>J.Y.Oh, ‘A study on the environmental colors as a healing environment element by stress measurement’ (unpublished PhD thesis, Inje University, 2019.)</li>
                        </ul>
                    </>
                    :
                    <>
                        <h4>&lt;기획&gt;</h4>
                        <p>Syeon</p>
                        <h4>&lt;문항구성&gt;</h4>
                        <p>Syeon</p>
                        <h4>&lt;글&gt;</h4>
                        <p>Syeon</p>
                        <h4>&lt;일러스트 및 디자인&gt;</h4>
                        <p>Syeon</p>
                        <h4>&lt;개발&gt;</h4>
                        <p>Enif</p>
                        <h4>&lt;사운드 디자인&gt;</h4>
                        <p>Myn, Syeon</p>
                        <h4>&lt;참고 문헌&gt;</h4>
                        <h5>- 단행본 -</h5>
                        <ul>
                            <li>김선현. 2009. 컬러가 내 몸을 바꾼다:몸을 다스리고 마음을 움직이는 컬러테라피. 넥서스.</li>
                            <li>김선현. 2013. 색채심리학:몸과 마음을 치유하는 컬러. 이담북스.</li>
                            <li>김선현. 2015. 그림의 힘:최상의 리듬을 찾는 내 안의 새로운 변화, 에이트포인트.</li>
                            <li>정현희. 2018. 실제 적용 중심의 미술치료. 학지사.</li>
                            <li>Eric Ackroyd. 1997. 심층심리학적 꿈 상징 사전. 김병준 옮김. 한국심리치료연구소.</li>
                            <li>Lilian Verner-Bonds. 2008. 몸과 마음을 치료하는 색채:색채치유의 완결판:색이 지닌 힘을 이용하여 몸과 마음을 치유하는 방법. 한창환 옮김 도서출판 국제.</li>
                            <li>Linda Picone. 2012. 365 매일 읽는 긍정의 한 줄. Guihwa Hwang Blanz 옮김. 책이 있는 풍경.</li>
                        </ul>
                        <h5>- 국내 학술지 논문 -</h5>
                        <ul>
                            <li>권영걸, 박자은. (2005). 치료적 효과를 고려한 주거공간의 색채디자인 방법 연구. 한국색채학회 논문집, 19(2), 11-20.</li>
                            <li>김소영, 박수빈. (2010). 아동상담치료공간의 실내디자인 특성에 관한 연구. 한국실내디자인학회 학술대회논문집, 12(3), 188-191.</li>
                            <li>민지혜, 최경실. (2014). 실내 구성 요소별 마감재 색채 및 재질 이미지 연구. 한국색채학회 논문집, 28(4), 75-87.</li>
                            <li>박현수, 이찬수, 장자순, 이강희, 김현택. (2011).조명심리연구에 대한 고찰과 전망. 한국심리학회지 일반, 30(1), 23-43.</li>
                            <li>윤갑근, 강경원, 정사희. (2005). 빛과 색이 심리적 반응에 미치는 영향에 관한 연구. 한국실내디자인학회논문집, 14(3), 199-207.</li>
                            <li>이영호. (2011). 꿈강도, 전형적 꿈 주제 및 꿈에 대한 태도와 정신병리의 관계. Korean Journal of Clinical Psychology, 30(2), 419-439.</li>
                            <li>이진숙, 진은미, 박유미. (2002). 실내마감재의 종류별 색채 평가특성 분석을 위한 연구. 한국색채학회 논문집 16(2,3), 77-87.</li>
                            <li>장미정. (2017). 인테리어 테라피에 관한 탐색적 연구. 한국실내디자인학회논문집, 26(1), 124-133.</li>
                            <li>장미정. (2018). 융의 심리학적 이미지 해석을 통한 인테리어 테라피 사례연구. 한국실내디자인학회논문집, 27(2), 128-142.</li>
                            <li>장미정, 이진민. (2019). 인테리어 테라피에서 에코 테라피의 접목가능성 고찰:통합적 심리치료를 중심으로. 한국화예디자인학 연구, 40(40), 3-24.</li>
                            <li>정승혜. (2009). 색채이론에 근거한 공간과 오브제의 관계 연구:색채대비와 조화를 중심으로. 기초조형학연구, 10(1), 461-469.</li>
                            <li>정희주, 임나영. (2020). 미술심리 관점을 적용한 전시 감상에서 관람객의 자기성찰 경험에 대한 개념도 연구. 한국예술치료학회지 20(2), 1-19.</li>
                            <li>추진. (2009). 컬러테라피에 근거한 미술치료 공간의 색채환경에 관한 연구. 美術治療硏究, 16(6), 1089-1110.</li>
                        </ul>
                        <h5>- 학위 논문 -</h5>
                        <ul>
                            <li>오지영. (2019). 스트레스 측정에 의한 치유환경요소로서의 환경색채 연구(박사학위). 仁濟大學校, 경상남도</li>
                        </ul>
                    </>
            }

        </div>
    )
}

export default ResultReference;
