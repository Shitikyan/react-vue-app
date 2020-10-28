import React from 'react';
import { checkValue, dateStr } from '../../../../utils/formatters';
import { ContainerMD, Grid, List } from '../../../shared';

import './index.scss';

const AuthorityCore = ({ series, catalog_id, title, subtitle, version, section, subsection, chapter, type, pages, date, commonNames }) => (
  <ContainerMD className="authority-core">
    <Grid cols="1">
      <p>
        <span className="text text-xxs text-bold">Official Name:&nbsp;</span>
        <span className="text text-md">{series} {catalog_id} {title} {subtitle} {version} {section} {subsection} {chapter}</span>
      </p>
      <Grid cols="2">
        <div className="authority-core__flex">
          <span className="text text-xxs text-bold text-right text-no-wrap">Common Names:&nbsp;</span>
          <List title=""
                className="list"
                items={commonNames}
                itemFormat={(item) => item}
                />
        </div>
        <div className="authority-core--container">
          <div>
            <div className="authority-core__grid">
              <span className="text text-xxs text-bold text-right">Type:&nbsp;</span>
              <span className="text text-lg">{checkValue(type)}</span>
            </div>
          </div>
          <div>
            <div className="authority-core__grid">
              <span className="text text-xxs text-bold text-right">Pages:&nbsp;</span>
              <span className="text text-lg">{checkValue(pages)}</span>
            </div>
          </div>
          <div>
            <div className="authority-core__grid">
              <span className="text text-xxs text-bold text-right">Date:&nbsp;</span>
              <span className="text text-lg">{dateStr(date)}</span>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  </ContainerMD>
);

export default AuthorityCore;
