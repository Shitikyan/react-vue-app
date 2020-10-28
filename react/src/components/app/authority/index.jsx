import React, { Fragment } from 'react';
import AuthorityCore from './core';
import AuthorityPublish from './publish';
import { Bordered, ContainerMD, Grid, Loading, List } from '../../shared';
import useApi from '../../../utils/hooks/api';

const Authority = () => {
  const [{ data, isLoading }] = useApi.get('/api/authority/core');
  
  if (isLoading) {
    return <Loading />
  }

  const common_names = data.CommonNames['@set'];
  const authors = data.Authors['@set'];
  const editors = data.Editors['@set'];
  const publish_info = data.ADIdentifiers['@set'][0];

  const {
     series,
     catalog_id,
     title,
     subtitle,
     published_version,
     section,
     subsection,
     chapter,
     type,
     pages,
     effective_date: published_date,
  } = data;

  return (
    <Fragment>
      <Bordered position="bottom">
        <AuthorityCore
          series={series}
          catalog_id={catalog_id}
          title={title}
          subtitle={subtitle}
          version={published_version}
          section={section}
          subsection={subsection}
          chapter={chapter}
          type={type}
          pages={pages}
          date={published_date}
          commonNames={common_names.map(q => q.name)}
        />
      </Bordered>

      <Bordered position="bottom">
        <ContainerMD>
          <Grid cols="1">
            <Grid cols="2">
              <List title="Authors"
                    items={authors}
                    itemFormat={q => `${q.first_name ?? ''} ${q.last_name ?? ''}`} />
              <List title="Editors"
                    items={editors}
                    itemFormat={q => `${q.first_name ?? ''} ${q.last_name ?? ''}`} />
            </Grid>

            <Bordered>
              <ContainerMD>
                <AuthorityPublish 
                  type={publish_info.epub_type} 
                  availability={publish_info.availability} 
                  language={publish_info.language} 
                  websitePublisher={publish_info.website_publisher}
                  periodicalTitle={publish_info.periodical_title}
                  volumeIssue={publish_info.volume_issue}
                  publishedDate={publish_info.published_date}
                  isbn={publish_info.isbn}
                  uuid={publish_info.uuid}
                  searchInfo={publish_info.search_information}
                  url={publish_info.url}
                  doi={publish_info.doi}
                  />
              </ContainerMD>
            </Bordered>
          </Grid>
        </ContainerMD>
      </Bordered>
    </Fragment>
  );
};

export default Authority;
