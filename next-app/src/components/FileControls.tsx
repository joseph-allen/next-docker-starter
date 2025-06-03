import React from 'react';
import { ButtonGroup, IconButton, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import type { FileControlsProps } from '@/types/file';

const FileControls: React.FC<FileControlsProps> = ({
  onDownload,
  onDelete,
  disableDelete = false,
}) => {
  return (
    <ButtonGroup variant="outlined">
      <Tooltip title="Download">
        <IconButton color="primary" onClick={onDownload}>
          <DownloadIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        {/* span to safely disable button */}
        <span>
          <IconButton color="error" onClick={onDelete} disabled={disableDelete}>
            <DeleteIcon />
          </IconButton>
        </span>
      </Tooltip>
    </ButtonGroup>
  );
};

export default FileControls;
