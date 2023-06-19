import React from 'react';
import { styled } from 'styled-components';
import WriteAnswer from '../components/answer/WriteAnswer';
import Answer from '../components/answer/Answer';
import ViewQuestionDetail from '../components/question/ViewQuestionDetail';

const QuestionDetail = () => {
  return (
    <QuestionDetailPageContainer>
      <ViewQuestionDetail />
      <Answer />
      <WriteAnswer />
    </QuestionDetailPageContainer>
  );
};
const QuestionDetailPageContainer = styled.div`
  padding: 15px;
  padding-right: 0;
  width: 1091px;
`;
export default QuestionDetail;
