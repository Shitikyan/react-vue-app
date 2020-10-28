import React from 'react';
import { checkValue, dateStr } from '../../../../utils/formatters';
import { ContainerLG, ContainerSM, Grid, TitledBordered } from '../../../shared';

import './index.scss';

const AuthorityPublish = ({ type, availability, language, websitePublisher, periodicalTitle, volumeIssue, publishedDate, isbn, uuid, searchInfo, url, doi }) => (
  <TitledBordered title="Published Version">
    <ContainerSM className="published-version">
      <Grid className="published-version__header" cols="3">
        <div>
          <span className="text text-xxs text-bold text-right">Type:&nbsp;</span>
          <span className="text text-lg">{checkValue(type)}</span>
        </div>
        <div>
          <span className="text text-xxs text-bold text-right">Availability:&nbsp;</span>
          <span className="text text-lg">{checkValue(availability)}</span>
        </div>
        <div>
          <span className="text text-xxs text-bold text-right">Language:&nbsp;</span>
          <span className="text text-lg">{checkValue(language)}</span>
        </div>
      </Grid>
      <ContainerSM className="published-version__body">
        <div className="titles-container">
          <div className="titles">
            <p className="text text-xxs text-bold text-right">Website Publisher or Periodical Title:&nbsp;</p>
            <p className="text text-xxs text-bold text-right">Volume or Issue:&nbsp;</p>
            <p className="text text-xxs text-bold text-right">Published Date:&nbsp;</p>
          </div>
          <div className="title-values">
            <p className="text text-lg">{checkValue(websitePublisher || periodicalTitle)}</p>
            <p className="text text-lg">{checkValue(volumeIssue)}</p>
            <p className="text text-lg">{dateStr(publishedDate)}</p>
          </div>
        </div>
        <TitledBordered title="Locator Information">
          <ContainerSM className="locator-header">
            <div>
              <span className="text text-xxs text-bold text-right">ISBN:&nbsp;</span>
              <span className="text text-lg">{checkValue(isbn)}</span>
            </div>
            <div className="titles-container">
              <div className="titles">
                <p className="text text-xxs text-bold text-right">UUID:&nbsp;</p>
                <p className="text text-xxs text-bold text-right">Search Info:&nbsp;</p>
              </div>
              <div className="title-values">
                <p className="text text-lg">{checkValue(uuid)}</p>
                <p className="text text-lg">{checkValue(searchInfo)}</p>
              </div>
            </div>
          </ContainerSM>
          <ContainerLG className="uuid-container">
            <div className="titles">
              <p className="text text-xxs text-bold text-right">URL:&nbsp;</p>
              <p className="text text-xxs text-bold text-right">DOI:&nbsp;</p>
            </div>
            <div className="title-values">
              <p className="text text-lg">{checkValue(url)}</p>
              <p className="text text-lg">{checkValue(doi)}</p>
            </div>
          </ContainerLG>
        </TitledBordered>
      </ContainerSM>
    </ContainerSM>
  </TitledBordered>
);

export default AuthorityPublish;
