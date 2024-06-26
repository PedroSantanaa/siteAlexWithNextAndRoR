import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const ProjectsList = styled.div`
  width: 100%;
`;

export const FiltersForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FiltersFormFieldSelect = styled.select`
  width: 150px;
  padding: 10px;
  border: 2px solid #0a264c;
  border-radius: 4px;
`;

export const ProjectsListHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProjectListHeaderP = styled.p`
  font-size: 16px;
  color: #fca311;
  margin: 0;
`;

export const ProjectsListHeaderTitle = styled.h1`
  color: #0a264c;
  margin: 0;
`;

export const ProjectsListHeaderFilters = styled.div`
  display: flex;
`;

export const ProjectsListHeaderFilterLeft = styled.button<{ $isactive?: boolean; }>`
  background-color: ${({ $isactive }) => $isactive ? '#0a264c' : 'transparent'};
  border: 1px solid #e5e5e5;
  color: ${({ $isactive }) => $isactive ? 'white' : '#0a264c'};
  border-radius: 4px 0px 0px 4px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #0a264c;
    color: white;
  }
`;

export const ProjectsListHeaderFilterCenter = styled.button<{ $isactive?: boolean; }>`
  background-color: ${({ $isactive }) => $isactive ? '#0a264c' : 'transparent'};
  border: 1px solid #e5e5e5;
  border-left: 0px;
  color: ${({ $isactive }) => $isactive ? 'white' : '#0a264c'};
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #0a264c;
    color: white;
  }
`;


export const ProjectsListHeaderFilterRight = styled.button<{ $isactive?: boolean; }>`
  background-color: ${({ $isactive }) => $isactive ? '#0a264c' : 'transparent'};
  border: 1px solid #e5e5e5;
  border-left: 0px;
  color: ${({ $isactive }) => $isactive ? 'white' : '#0a264c'};
  border-radius: 0px 4px 4px 0px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #0a264c;
    color: white;
  }
`;

export const ProjectsListProject = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

export const ProjectsListProjectHeader = styled.h3`
  margin: 0;
`;

export const FilterSelectOption = styled.option`
  width: 100%;
  padding: 10px;
  text-align: left;
  background-color: transparent;
  border: none;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const FilterSearch = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FilterSearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  padding: 10px;
`;

export const ProjectsTable = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

export const ProjectsRow = styled.div`
  display: table-row;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const ProjectsCell = styled.div`
  display: table-cell;
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const ProjectsHeader = styled(ProjectsCell)`
  font-weight: bold;
  background-color: #0a264c;
  color: white;
`;

export const ViewButton = styled.button`
  background-color: #0a264c;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;