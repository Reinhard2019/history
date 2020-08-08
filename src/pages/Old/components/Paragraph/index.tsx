import React from 'react';
import { Typography, Tooltip } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';

const Paragraph = (props: ParagraphProps) => {
  const { style, children, ...otherProps } = props;
  return (
    <Tooltip title={children && <pre>{children}</pre>}>
      <Typography.Paragraph
        ellipsis
        style={{ marginBottom: 0, ...style }}
        {...otherProps}
      >
        {children || '-'}
      </Typography.Paragraph>
    </Tooltip>
  );
};

export default Paragraph;
